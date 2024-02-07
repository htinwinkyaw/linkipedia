import { MdDelete, MdEdit } from "react-icons/md";

import CustomButton from "@/app/_components/ui/CustomButton";
import { Link } from "@prisma/client";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useLoading from "@/app/_hooks/useLoading";
import { useRouter } from "next/navigation";

interface LinkItemControlsProps {
  link: Link;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const LinkItemControls: React.FC<LinkItemControlsProps> = ({
  link,
  setEditing,
}) => {
  const { setLoading } = useLoading();
  const router = useRouter();

  const handleDelete = (id: string): void => {
    setLoading(true);
    axios
      .delete(`/api/links/${link.id}`)
      .then((res) => {
        router.refresh();
        toast.success("link is deleted.");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-row gap-3">
      <CustomButton
        icon={MdEdit}
        onClick={() => {
          setEditing((prev) => {
            return !prev;
          });
        }}
      />
      <CustomButton
        icon={MdDelete}
        onClick={handleDelete.bind(null, link.id)}
      />
    </div>
  );
};

export default LinkItemControls;
