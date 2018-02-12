package com.vuekotlin.demo.Services

import com.vuekotlin.demo.Models.Skill
import org.springframework.stereotype.Service

@Service
class SkillsService {
    private var skills = arrayListOf(Skill("Kotlin","pretty"), Skill("Java"),Skill("VueJS"),Skill("SQL"))

    fun findAll() = skills

    fun insert(skill: Skill) = skills.add(skill)
}