//package frontend.demo.config;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.authentication.AuthenticationFailureHandler;
//import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
//    @Autowired
//    UserDetailsService userDetailsService;
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(userDetailsService);
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests()
//                .antMatchers("/").permitAll()
//                .antMatchers("/blog").permitAll()
//                .antMatchers("/contact").permitAll()
//                .antMatchers("/activityswim").permitAll()
//                .antMatchers("/activitycycle").permitAll()
//                .antMatchers("/activityrun").permitAll()
//                .antMatchers("/activitytrx").permitAll()
//                .antMatchers("/about").permitAll()
//                .antMatchers("/admin/login").permitAll()
//                .antMatchers("/adminindex").hasRole("ADMIN")
//                .antMatchers("/admin/create/activity").hasRole("ADMIN")
//                .antMatchers("/admin/viewActivities").hasRole("ADMIN")
//                .and().formLogin()
//                .permitAll()
//                .loginPage("/admin/login")
//                .usernameParameter("email")
//                .passwordParameter("password")
//                .loginProcessingUrl("/doLogin")
//                .defaultSuccessUrl("/profile02")
//                .failureUrl("/login_error")
////                    .successForwardUrl("/login_success_handler")
////                    .failureForwardUrl("/login_failure_handler")
//                .successHandler(new AuthenticationSuccessHandler() {
//                    @Override
//                    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
//                        String name = authentication.getName();
//                        System.out.println("Logged in user: " + name);
//
//                    }
//                })
//                .failureHandler(new AuthenticationFailureHandler() {
//                    @Override
//                    public void onAuthenticationFailure(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
//                        System.out.println("Login Failure!!!....");
//
//                        httpServletResponse.sendRedirect("/");
//                    }
//                })
//                .and().exceptionHandling().accessDeniedPage("/403");
//    }
//
//    @Bean
//    public PasswordEncoder getPasswordEncoder() {
//        return NoOpPasswordEncoder.getInstance();
//    }
//}