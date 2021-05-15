package frontend.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String index() {

        return "user/index";
    }

    @GetMapping("/contact")
    public String contact(){

        return "user/contact";
    }

    @GetMapping("/activityswim")
    public String activityswim() {

        return "user/activityswim";
    }

    @GetMapping("/activitycycle")
    public String activitycycle() {

        return "user/activitycycle";
    }

    @GetMapping("/activityrun")
    public String activityrun() {

        return "user/activityrun";
    }

    @GetMapping("/activitytrx")
    public String activitytrx() {

        return "user/activitytrx";
    }
}
