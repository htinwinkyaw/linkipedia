"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Card from "../_components/wrapper/Card";
import CustomButton from "../_components/ui/CustomButton";
import CustomInput from "../_components/ui/CustomInput";
import { Link } from "@prisma/client";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useLoading from "../_hooks/useLoading";
import { useRouter } from "next/navigation";

interface LinkFormProps {
  link?: Link;
  onCancel: () => void;
}

const LinkForm: React.FC<LinkFormProps> = ({ link, onCancel }) => {
  const { setLoading } = useLoading();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: link ? link.title : "",
      url: link ? link.url : "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    const url = link ? `/api/links/${link.id}` : "/api/links";
    const method = link ? "PUT" : "POST";

    axios
      .request({ url, method, data })
      .then((res) => {
        reset();
        onCancel();
        router.refresh();

        toast.success(link ? "link is updated." : "new link is created.");
      })
      .catch((err) => {
        console.log(err);
        toast.success(`failed to ${link ? "update the" : "create new"} link.`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Card full>
      <CustomInput
        id="title"
        label="Title"
        register={register}
        rules={{ required: true }}
        errors={errors}
      />
      <CustomInput
        id="url"
        label="Enter URL"
        placeholder="https://www.example.com/username"
        register={register}
        rules={{ required: true }}
        errors={errors}
      />
      <div className="flex gap-3 justify-end">
        <CustomButton label="Cancel" onClick={onCancel} />
        <CustomButton label="Save" onClick={handleSubmit(onSubmit)} />
      </div>
    </Card>
  );
};

export default LinkForm;
