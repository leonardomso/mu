import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Stack,
  Input,
  Button,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

interface SignInFormProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password should be 8 chars minimum"),
});

const SignIn = () => {
  const history = useHistory();

  const {
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SignInFormProps>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    console.log("submitted!");
  };

  return (
    <Stack
      as="form"
      onSubmit={onSubmit}
      direction="column"
      spacing="20px"
      p="20px"
      w="100%"
      h="100%"
      maxW="500px"
      margin="0 auto"
      alignItems="center"
      justifyContent="center"
    >
      <Stack direction="column" spacing="10px">
        <Heading as="h1" fontSize="36px" textAlign="center">
          Playground
        </Heading>

        <Text fontSize="16px" lineHeight="30px" textAlign="center">
          Create an account
        </Text>
      </Stack>

      <FormControl isInvalid={errors.email && true}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          aria-label="email"
          {...register("email")}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.password && true}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          aria-label="password"
          {...register("password")}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        width="100%"
        isLoading={isSubmitting}
        isDisabled={!isValid}
      >
        Sign up
      </Button>

      <Stack direction="row" spacing="3px">
        <Text>Already have an account?</Text>
        <Link onClick={() => history.push("/sign-in")}>Log in</Link>
      </Stack>
    </Stack>
  );
};

export default SignIn;
