package frontend.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String index(){

        return "user/index";
    }

    @GetMapping("/blog")
    public String blog(){

        return "user/blog";
    }

    @GetMapping("/contact")
    public String contact(){

        return "user/contact";
    }

    @GetMapping("/activityswim")
    public String activityswim() {

        return "user/activityswim";
    }

    @GetMapping("/about")
    public String about() {

        return "user/about";
    }
}
