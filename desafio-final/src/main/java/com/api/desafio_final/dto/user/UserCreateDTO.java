package com.api.desafio_final.dto.user;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserCreateDTO {
    @NotNull
    @NotEmpty
    @Pattern(regexp = "^[a-zA-Z]+$", message = "Somente letras são aceitas")
    private String name;

    @NotNull
    @NotEmpty
    private String userName;

    @NotNull
    @NotEmpty
    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", message = "Endereço de e-mail inválido")
    private String email;

    @NotNull
    @NotEmpty
    private String password;

    @NotNull
    @NotEmpty
    @Pattern(regexp = "^[0-9]+$", message = "Insira apenas números")
    private String phone;

    @NotNull
    @NotEmpty
    private String description;

    @NotNull
    @NotEmpty
    private String profileLink;

    @NotNull
    @NotEmpty
    private boolean isDeleted;
}
