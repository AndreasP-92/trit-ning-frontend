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

    @GetMapping("/about")
    public String about() {

        return "user/about";
    }

    @GetMapping("/page/swim")
    public String activityswim() {

        return "user/activityswim";
    }

    @GetMapping("/page/cycle")
    public String activitycycle() {

        return "user/activitycycle";
    }

    @GetMapping("/page/run")
    public String activityrun() {

        return "user/activityrun";
    }

    @GetMapping("/page/trx")
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

    @GetMapping("/admin/create/admin")
    public String adminCreateAdmin(){

        return "/admin/createAdmin";
    }
    // ***** ADMIN BLOG

    @GetMapping("/admin/view/blogpost")
    public String adminViewBlogPost(){

        return "";
    }

    @GetMapping("/admin/create/blogpost")
    public String adminCreateBlogPost(){

        return "user/blogPost";
    }

    @GetMapping("/admin/edit/{blog}")
    public String adminEditBlog(){

        return "/admin/viewBlogs";
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

    @GetMapping("/admin/create/review")
    public String adminCreateReview(){

        return "admin/createReview";
    }

    @GetMapping("/admin/edit/review/{id}")
    public String adminEditReview(){

        return "admin/editReview";
    }

    @GetMapping("/admin/view/admins")
    public String adminViewAdmin(){
        return "admin/viewAdmins";
    }

    @GetMapping("/admin/create/about")
    public String createAbout(){
        return "admin/createAbout";
    }

    @GetMapping("/admin/edit/about/{id}")
    public String editAbout(){
        return "admin/editAbout";
    }
}
