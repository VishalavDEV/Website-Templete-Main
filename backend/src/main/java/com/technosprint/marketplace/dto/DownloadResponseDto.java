package com.technosprint.marketplace.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DownloadResponseDto {
    private String downloadUrl;
    private String downloadFile;
    private String token;
    private String message;
    private Integer downloadsCount;
}
