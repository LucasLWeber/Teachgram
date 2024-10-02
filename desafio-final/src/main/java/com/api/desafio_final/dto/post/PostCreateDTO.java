package com.api.desafio_final.dto.post;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostCreateDTO {
    @NotNull
    @NotEmpty
    @Schema(name = "title", description = "Insira o título para seu Post")
    private String title;

    @NotNull
    @NotEmpty
    @Schema(name = "description", description = "Insira a descrição para seu Post")
    private String description;

    @NotEmpty
    @Schema(name = "photoLink", description = "Insira a url para imagem para seu Post")
    private String photoLink;

    @NotNull
    @NotEmpty
    @Schema(name = "videoLink", description = "Insira a url para o vídeo para seu Post")
    private String videoLink;


    @NotNull
    @NotEmpty
    @Schema(name = "isPrivate", description = "Insira true/false indicando se o Post é privado")
    private boolean isPrivate;
}
