package com.vuekotlin.demo.Models

import com.fasterxml.jackson.annotation.JsonFormat
import java.time.LocalDateTime
import javax.validation.constraints.NotNull
import javax.validation.constraints.Size

data class Skill(@get:NotNull @get:Size(min = 2, max = 14) val name:String?,
                 @get:Size(min = 2, max = 16) val description:String? = "default content")

data class Message(val message:String,
                   @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
                   val date: LocalDateTime = LocalDateTime.now(),
                   val data: Any?= null)