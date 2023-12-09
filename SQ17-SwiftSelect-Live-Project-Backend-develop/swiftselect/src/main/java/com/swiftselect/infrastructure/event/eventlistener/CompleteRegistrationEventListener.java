package com.swiftselect.infrastructure.event.eventlistener;

import com.swiftselect.infrastructure.event.events.CompleteRegistrationEvent;
import com.swiftselect.infrastructure.security.JwtTokenProvider;
import com.swiftselect.services.AuthService;
import com.swiftselect.services.EmailSenderService;
import com.swiftselect.utils.SecurityConstants;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Slf4j
@Async
@Component
@RequiredArgsConstructor
public class CompleteRegistrationEventListener implements ApplicationListener<CompleteRegistrationEvent> {
    private final EmailSenderService emailSenderService;
    private final JwtTokenProvider tokenProvider;

    @Override
    public void onApplicationEvent(CompleteRegistrationEvent event) {
        // Create a verification token for the user
        String verificationToken = tokenProvider.generateValidationToken(event.getEmail(), SecurityConstants.JWT_EXPIRATION);

        // Build the verification url to be sent to the user
        String url = event.getApplicationUrl() + "/auth/register/verify-email?email=" + event.getEmail() + "&token=" + verificationToken;

        // Send the email to the user
        emailSenderService.sendRegistrationEmailVerification(url, event.getEmail(), event.getFirstName());

        log.info("Click the link to verify your email and change ur password : {}", url);
    }
}
