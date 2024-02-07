import CustomCheckboxSwitch from "@/app/_components/ui/CustomCheckboxSwitch";
import { Link } from "@prisma/client";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useLoading from "@/app/_hooks/useLoading";
import { useRouter } from "next/navigation";
interface LinkItemActiveControlProps {
  link: Link;
}
const LinkItemActiveControl: React.FC<LinkItemActiveControlProps> = ({
  link,
}) => {
  const { setLoading } = useLoading();
  const router = useRouter();
  const handleActiveChange = (): void => {
    setLoading(true);
    axios
      .patch(`/api/links/${link.id}`, { active: !link.active })
      .then((res) => {
        router.refresh();
        toast.success("link status updated.");
      })
      .catch((err) => {
        console.log(err);
        toast.error("failed to update link status.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <CustomCheckboxSwitch
        active={link.active}
        onChange={handleActiveChange}
      />
    </div>
  );
};

export default LinkItemActiveControl;
