package frontend.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String index(){

        return "user/index";
    }

    //------------------ ADMIN EDIT -------------------
    @GetMapping("/admin/edit")
    public String adminEdit(){

        return "/admin/edit";
    }
}
