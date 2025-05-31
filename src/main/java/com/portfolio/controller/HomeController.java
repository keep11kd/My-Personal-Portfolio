package com.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.portfolio.model.ContactForm;

@Controller
public class HomeController {
	
	@GetMapping("/")
	public String home(Model model) {
		model.addAttribute("contactForm", new ContactForm());
		return "index";
	}
	@GetMapping("/about")
	public String about() {
		return "about";
	}
	@GetMapping("/skills")
	public String skills() {
	    return "skills";  // maps to skills.html
	}
	@GetMapping("/projects")
	public String projects() {
	    return "projects";  // maps to projects.html
	}
	@GetMapping("/resume")
	public String resume() {
	    return "resume";
	}

	
//	@GetMapping("/contact")
//    public String contactForm(Model model) {
//        model.addAttribute("contactForm", new ContactForm()); // Add this line
//        return "contact";
//    }


}
