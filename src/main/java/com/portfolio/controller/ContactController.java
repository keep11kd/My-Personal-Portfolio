package com.portfolio.controller;

import com.portfolio.databasemodel.Contact;
import com.portfolio.model.ContactForm;
import com.portfolio.repository.ContactRepository;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Controller
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    private ContactRepository contactRepository;
    
    private static final Logger logger = LoggerFactory.getLogger(ContactController.class);

    @GetMapping
    public String contactForm(Model model) {
        if (!model.containsAttribute("contactForm")) {
            model.addAttribute("contactForm", new ContactForm());
        }
        return "contact";
    }

    @PostMapping("/submit")
    public String submitForm(@ModelAttribute("contactForm") @Valid ContactForm form,
                             BindingResult result,
                             RedirectAttributes redirectAttributes) {
        if (result.hasErrors() || (form.getHiddenField() != null && !form.getHiddenField().isEmpty())) {
            logger.warn("Validation failed or spam detected.");
            redirectAttributes.addFlashAttribute("errorMessage", "Please correct the errors in the form.");
            redirectAttributes.addFlashAttribute("contactForm", form);
            return "redirect:/contact";
        }

        try {
            // Save to the database
            Contact contact = new Contact(form.getName(), form.getEmail(), form.getMessage(), form.getPhone());
            contactRepository.save(contact);
            logger.info("Contact form submission saved to database from {}", form.getEmail());

            // Send email
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("bariabdul11ab@gmail.com");
            message.setSubject("Portfolio Contact Form - From: " + form.getName());
            message.setText("Email: " + form.getEmail()
                    + "\nPhone: " + (form.getPhone() != null ? form.getPhone() : "N/A")
                    + "\n\nMessage:\n" + form.getMessage());

            mailSender.send(message);
            logger.info("Email sent successfully from {}", form.getEmail());

            redirectAttributes.addFlashAttribute("successMessage", "✅ Thank you! Your message has been sent.");
            return "redirect:/contact";

        } catch (Exception e) {
            logger.error("Error processing contact form", e);
            redirectAttributes.addFlashAttribute("errorMessage", "❌ Failed to send message. Please try again.");
            redirectAttributes.addFlashAttribute("contactForm", form);
            return "redirect:/contact";
        }
    }
}
