import { PartialType } from "@nestjs/mapped-types";
import {createBrandDto } from "./create-brand.dto";

export class updateBrandDto extends PartialType (createBrandDto){}