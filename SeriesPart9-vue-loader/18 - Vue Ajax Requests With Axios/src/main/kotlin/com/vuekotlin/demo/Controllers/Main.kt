package com.vuekotlin.demo.Controllers

import com.vuekotlin.demo.Models.Message
import com.vuekotlin.demo.Models.Skill
import com.vuekotlin.demo.Services.SkillsService
import com.vuekotlin.demo.Utils.groupByFieldMessage
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.validation.Errors
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/skills")
class Main(val skillsService: SkillsService) {
    @GetMapping fun skillsFindAll() = skillsService.findAll()

    @PostMapping fun insertSkill(@RequestBody @Valid skill: Skill,errors : Errors): ResponseEntity<Message> {
        return if(errors.hasErrors()){
            ResponseEntity(Message("insert skill fail",data = errors.groupByFieldMessage()),HttpStatus.NOT_ACCEPTABLE)
        }else{
            if(skillsService.insert(skill)){
                ResponseEntity(Message("insert skill success",data = skill),HttpStatus.OK)
            }else{
                ResponseEntity(Message("insert skill fail",data = skill),HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
    }
}
@Controller
class HTML{
    @GetMapping("/") fun index() = "index"
}