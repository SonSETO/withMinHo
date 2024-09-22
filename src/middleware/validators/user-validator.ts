import Joi from "joi";
import { Request, Response, NextFunction } from "express";

export const userValidator = {
  signUp: (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
      name: Joi.string().min(2).required().messages({
        "string.base": "이름은 문자열이어야 합니다.",
        "string.empty": "이름을 입력해주세요.",
        "string.min": "이름은 최소 2글자 이상이어야 합니다.",
        "any.required": "이름은 필수 항목입니다.",
      }),
      email: Joi.string().email().required().messages({
        "string.base": "이메일은 문자열이어야 합니다.",
        "string.email": "유효한 이메일 형식이 아닙니다.",
        "string.empty": "이메일을 입력해주세요.",
        "any.required": "이메일은 필수 항목입니다.",
      }),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{8,15}$"))
        .required()
        .messages({
          "string.base": "비밀번호는 문자열이어야 합니다.",
          "string.empty": "비밀번호를 입력해주세요.",
          "string.pattern.base":
            "비밀번호는 8~15자의 대소문자와 숫자로만 구성되어야 합니다.",
          "any.required": "비밀번호는 필수 항목입니다.",
        }),
      avatar: Joi.string().optional().default("N/A").messages({
        "string.base": "아바타는 문자열이어야 합니다.",
      }),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    next();
  },

  signIn: (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
      email: Joi.string().email().required().messages({
        "string.base": "이메일은 문자열이어야 합니다.",
        "string.email": "유효한 이메일 형식이 아닙니다.",
        "string.empty": "이메일을 입력해주세요.",
        "any.required": "이메일은 필수 항목입니다.",
      }),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{8,15}$"))
        .required()
        .messages({
          "string.base": "비밀번호는 문자열이어야 합니다.",
          "string.empty": "비밀번호를 입력해주세요.",
          "string.pattern.base":
            "비밀번호는 8~15자의 대소문자와 숫자로만 구성되어야 합니다.",
          "any.required": "비밀번호는 필수 항목입니다.",
        }),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    next();
  },
};
