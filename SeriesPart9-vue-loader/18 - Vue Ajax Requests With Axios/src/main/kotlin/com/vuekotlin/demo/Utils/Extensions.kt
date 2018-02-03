package com.vuekotlin.demo.Utils

import org.springframework.validation.Errors

fun Errors.groupByFieldMessage() = this.fieldErrors.groupBy({it.field},{it.defaultMessage})