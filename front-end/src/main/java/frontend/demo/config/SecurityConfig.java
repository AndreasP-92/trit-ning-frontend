package frontend.demo.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.io.IOException;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    DataSource dataSource;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication()
                .dataSource(dataSource)
//                .passwordEncoder(new BCryptPasswordEncoder())
                .usersByUsernameQuery("SELECT mail, password, enabled "
                        + "FROM users "
                        + "WHERE mail = ?")
                .authoritiesByUsernameQuery("SELECT mail, role "
                        + "FROM auth "
                        + "WHERE mail = ?");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
//                .antMatchers("/").permitAll()
//                .antMatchers("/blog").permitAll()
//                .antMatchers("/contact").permitAll()
//                .antMatchers("/activity/swim").permitAll()
//                .antMatchers("/activity/cycle").permitAll()
//                .antMatchers("/activity/run").permitAll()
//                .antMatchers("/activity/trx").permitAll()
//                .antMatchers("/about").permitAll()
//                .antMatchers("/admin/login").permitAll()
//                .antMatchers("/admin/index").hasRole("ADMIN")
//                .antMatchers("/admin/login").hasRole("ADMIN")
//                .antMatchers("/admin/view/blogpost").hasRole("ADMIN")
//                .antMatchers("/admin/create/blogpost").hasRole("ADMIN")
//                .antMatchers("/admin/edit{blog}").hasRole("ADMIN")
//                .antMatchers("/admin/view/pages").hasRole("ADMIN")
//                .antMatchers("/admin/create/page").hasRole("ADMIN")
//                .antMatchers("/admin/edit/page/{title}").hasRole("ADMIN")
//                .antMatchers("/admin/view/blogs").hasRole("ADMIN")
//                .antMatchers("/admin/create/review").hasRole("ADMIN")
//                .antMatchers("/admin/edit/review/{id}").hasRole("ADMIN")
//                .antMatchers("/admin/create/page").hasRole("ADMIN")
                .and().formLogin()
                .permitAll()
                .loginPage("/admin/login")
                .usernameParameter("email")
                .passwordParameter("password")
                .loginProcessingUrl("/doLogin")
                .defaultSuccessUrl("/profile02")
                .failureUrl("/login_error")
//                    .successForwardUrl("/login_success_handler")
//                    .failureForwardUrl("/login_failure_handler")
                .successHandler(new AuthenticationSuccessHandler() {
                    @Override
                    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
                        String name = authentication.getName();
                        System.out.println("Logged in user: " + name);

                    }
                })
                .failureHandler(new AuthenticationFailureHandler() {
                    @Override
                    public void onAuthenticationFailure(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
                        System.out.println("Login Failure!!!....");

                        httpServletResponse.sendRedirect("/");
                    }
                })
                .and().exceptionHandling().accessDeniedPage("/403");
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }
}