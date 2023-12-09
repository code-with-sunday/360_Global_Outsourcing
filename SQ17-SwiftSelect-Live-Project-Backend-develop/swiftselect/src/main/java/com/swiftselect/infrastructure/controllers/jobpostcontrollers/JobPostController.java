package com.swiftselect.infrastructure.controllers.jobpostcontrollers;

import com.swiftselect.domain.entities.jobpost.JobPost;
import com.swiftselect.domain.entities.jobpost.JobResponsibilities;
import com.swiftselect.domain.entities.jobpost.NiceToHave;
import com.swiftselect.domain.entities.jobpost.Qualification;
import com.swiftselect.domain.enums.EmploymentType;
import com.swiftselect.domain.enums.ExperienceLevel;
import com.swiftselect.domain.enums.Industry;
import com.swiftselect.domain.enums.JobType;
import com.swiftselect.domain.enums.ReportCat;
import com.swiftselect.payload.request.jobpostrequests.*;
import com.swiftselect.payload.response.APIResponse;
import com.swiftselect.payload.response.PostResponsePage;
import com.swiftselect.payload.response.jobpostresponse.JobPostResponse;
import com.swiftselect.payload.response.jobpostresponse.JobSearchResponse;
import com.swiftselect.payload.response.jobpostresponse.ResponsibilityResponse;
import com.swiftselect.repositories.JobPostRepository;
import com.swiftselect.repositories.JobResponsibilitiesRepository;
import com.swiftselect.repositories.NiceToHaveRepository;
import com.swiftselect.repositories.QualificationRepository;
import com.swiftselect.services.JobPostService;
import com.swiftselect.utils.AppConstants;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Slice;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/job-post")
public class JobPostController {
    private final ModelMapper modelMapper;
    private final JobPostService jobPostService;
    private final JobPostRepository jobPostRepository;

    // GET ALL JOB POSTS
    @GetMapping
    public ResponseEntity<APIResponse<PostResponsePage>> getAllPosts (
            @RequestParam(value = "pageNo", defaultValue = AppConstants.DEFAULT_PAGE_NO, required = false) int pageNo,
            @RequestParam(value = "pageSize", defaultValue = AppConstants.DEFAULT_PAGE_SIZE, required = false) int pageSize,
            @RequestParam(value = "sortBy", defaultValue = AppConstants.DEFAULT_SORT_BY, required = false) String sortBy,
            @RequestParam(value = "sortDir", defaultValue = AppConstants.DEFAULT_PAGE_NO, required = false) String sortDir) {

        return jobPostService.getAllPosts(pageNo, pageSize, sortBy, sortDir);
    }

    @GetMapping("/{id}")
    public ResponseEntity<APIResponse<JobPostResponse>> getJobPostById(@PathVariable Long id) {
        return jobPostService.getJobPostById(id);
    }

    @GetMapping("/filter")
    public ResponseEntity<APIResponse<List<JobPostResponse>>> getJobPosts(
            @RequestParam(required = false) JobType REMOTE,
            @RequestParam(required = false) JobType HYBRID,
            @RequestParam(required = false) JobType ON_SITE,
            @RequestParam(required = false) EmploymentType FULL_TIME,
            @RequestParam(required = false) EmploymentType PART_TIME,
            @RequestParam(required = false) EmploymentType CONTRACT,
            @RequestParam(required = false) EmploymentType TEMPORARY,
            @RequestParam(required = false) ExperienceLevel ENTRY_LEVEL,
            @RequestParam(required = false) ExperienceLevel JUNIOR_LEVEL,
            @RequestParam(required = false) ExperienceLevel MID_LEVEL,
            @RequestParam(required = false) ExperienceLevel SENIOR_LEVEL,
            @RequestParam(required = false) ExperienceLevel EXPERT_LEVEL
    ) {

        return ResponseEntity.ok(
                new APIResponse<>(
                        "successful",
                        jobPostRepository.findJobPostsByJobTypeOrJobTypeOrJobTypeOrEmploymentTypeOrEmploymentTypeOrEmploymentTypeOrEmploymentTypeOrExperienceLevelOrExperienceLevelOrExperienceLevelOrExperienceLevelOrExperienceLevel(
                                        REMOTE,
                                        HYBRID,
                                        ON_SITE,
                                        FULL_TIME,
                                        PART_TIME,
                                        CONTRACT,
                                        TEMPORARY,
                                        ENTRY_LEVEL,
                                        JUNIOR_LEVEL,
                                        MID_LEVEL,
                                        SENIOR_LEVEL,
                                        EXPERT_LEVEL
                                ).stream()
                                .map(jobPost -> {
                                    JobPostResponse jobPostResponse = modelMapper.map(jobPost, JobPostResponse.class);
                                    jobPostResponse.setCompanyName(jobPost.getEmployer().getCompanyName());
                                    jobPostResponse.setLogo(jobPost.getEmployer().getProfilePicture());

                                    return jobPostResponse;
                                })
                                .toList()
                )
        );
    }



    // CREATE JOB POST

    @PostMapping("/create-job-post")
    public ResponseEntity<APIResponse<JobPostResponse>> createJobPost (@Valid @RequestBody JobPostRequest jobPostRequest) {

        return jobPostService.createJobPost(jobPostRequest);
    }


    // UPDATE JOB POST
    @GetMapping("/jobType")
    public ResponseEntity<APIResponse<List<JobPost>>> getJobPostByJobType(@RequestParam JobType jobType) {

        return jobPostService.getJobPostByJobType(jobType);
    }

    @GetMapping("/by-experience-level/{experienceLevel}")
    public ResponseEntity<APIResponse<Slice<JobPostResponse>>> getJobPostsByExperienceLevel(
            @PathVariable ExperienceLevel experienceLevel,
            @RequestParam(value = "pageNo", defaultValue = AppConstants.DEFAULT_PAGE_NO, required = false) int pageNo,
            @RequestParam(value = "pageSize", defaultValue = AppConstants.DEFAULT_PAGE_SIZE, required = false) int pageSize,
            @RequestParam(value = "sortBy", defaultValue = AppConstants.DEFAULT_SORT_BY, required = false) String sortBy,
            @RequestParam(value = "sortDir", defaultValue = AppConstants.DEFAULT_PAGE_NO, required = false) String sortDir) {

        return jobPostService.getJobPostByExperienceLevel(
                experienceLevel, pageNo, pageSize, sortBy, sortDir);
    }

    @GetMapping("/search/title-or-industry")
    public ResponseEntity<APIResponse<List<JobPostResponse>>> jobSearchWithKeyword (@RequestParam("query")String query) {
        return jobPostService.searchJobs(query);
    }

    @GetMapping("/search/state-or-country")
    public ResponseEntity<APIResponse<List<JobPostResponse>>> getJobPostByStateAndCountry(
            @RequestParam("query") String query
    ) {
        return jobPostService.getJobPostByStateAndCountry(query);
    }
}
