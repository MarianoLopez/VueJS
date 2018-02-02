package com.vuekotlin.demo.Controllers

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController("api")
class Main {
    @GetMapping("skills") fun skils() = arrayOf("Kotlin","Vue","JavaScript","Tools")
}
@Controller
class HTML{
    @GetMapping("/") fun index() = "index"
}