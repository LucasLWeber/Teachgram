package com.api.desafio_final.service;

import com.api.desafio_final.dto.login.LoginCreateDTO;
import com.api.desafio_final.dto.user.UserCreateDTO;
import com.api.desafio_final.dto.user.UserDTO;
import com.api.desafio_final.entities.User;
import com.api.desafio_final.exceptions.CustomException;
import com.api.desafio_final.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final ObjectMapper objectMapper;

    public List<UserDTO> listAll(){
        List<User> users =  userRepository.findAll();
        return users.stream()
                .map(user -> objectMapper.convertValue(user, UserDTO.class))
                .collect(Collectors.toList());
    }

    public UserDTO listById(Integer userId) throws Exception{
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new CustomException("Usuário não encontado"));

        return objectMapper.convertValue(user, UserDTO.class);
    }

    public UserDTO login(LoginCreateDTO login) throws Exception{
        User user = userRepository.findByEmail(login.getEmail()).orElseThrow(() -> new CustomException("Usuário não encontrado"));
        boolean isAuth = login.getPassword().equals(user.getPassword());
        if (!isAuth) throw new CustomException("Senha incorreta");
        return listById(user.getUserId());
    }

    public UserDTO create(UserCreateDTO userCreateDTO){
        User user = objectMapper.convertValue(userCreateDTO, User.class);
        user.setCreatedAt(LocalDate.now());
        user.setUpdatedAt(LocalDate.now());
        userRepository.save(user);
        return objectMapper.convertValue(user, UserDTO.class);
    }

    public UserDTO update(UserCreateDTO userCreateDTO, Integer userId) throws Exception{
        User userFromBD = userRepository.findById(userId).orElseThrow(() -> new CustomException("Usuário não encontrado"));

        userFromBD.setName(userCreateDTO.getName());
        userFromBD.setUserName(userCreateDTO.getUserName());
        userFromBD.setPhone(userCreateDTO.getPhone());
        userFromBD.setEmail(userCreateDTO.getEmail());
        userFromBD.setPassword(userCreateDTO.getPassword());
        userFromBD.setProfileLink(userCreateDTO.getProfileLink());
        userFromBD.setDeleted(userCreateDTO.isDeleted());
        userFromBD.setUpdatedAt(LocalDate.now());
        userRepository.save(userFromBD);

        return objectMapper.convertValue(userFromBD, UserDTO.class);
    }

    public void delete(Integer userId) throws Exception{
        User user = userRepository.findById(userId).orElseThrow(() -> new CustomException("Usuário não encontrado"));
        userRepository.delete(user);
    }
}
