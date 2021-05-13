package frontend.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String index(){

        return "user/index";
    }

    @GetMapping("/contact")
    public String contact(){

        return "user/contact";
    }
}
