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

    @GetMapping("/blog/{blogpost}")
    public String blogPost(){
        return "user/blogPost";
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


    //------------------ ADMIN -------------------

    @GetMapping("/admin/login")
    public String login(){

        return "user/login";
    }

    @GetMapping("/admin/index")
    public String adminIndex(){

        return "/admin/adminIndex";
    }
    // ***** ADMIN BLOG

    @GetMapping("/admin/view/blogpost")
    public String adminViewBlogPost(){

        return "/admin/viewBlogs";
    }

    @GetMapping("/admin/create/blogpost")
    public String adminCreateBlogPost(){

        return "admin/createBlog";
    }

    @GetMapping("/admin/edit/blog/{title}")
    public String adminEditBlog(){

        return "admin/editBlog";
    }

    // ***** ADMIN PAGES
    @GetMapping("/admin/view/pages")
    public String adminviewPages(){

        return "admin/viewPage";
    }

    @GetMapping("/admin/create/page")
    public String adminCreatePage(){

        return "admin/createPage";
    }

    @GetMapping("/admin/edit/page/{title}")
    public String adminEditPage(){

        return "admin/editPage";
    }

    @GetMapping("/admin/view/blogs")
    public String adminviewBlogs(){

        return "admin/viewBlogs";
    }
}
