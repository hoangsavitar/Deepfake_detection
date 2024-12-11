import { Button, Image, Modal } from "antd";
import "./home.css";
import { usePredict } from "../../app/loader"; // Hook của bạn để gọi API
import { useState } from "react";

const HomePage = () => {
  const [fileImage, setFileImage] = useState<File | null>(null);
  const {
    mutate: mutatePredict,
    data: dataPredict,
    isLoading: isLoadingPredict,
  } = usePredict();
  const [openModal, setOpenModal] = useState(false);
  const defaultImage =
    "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";
  const [imagePath, setImagePath] = useState<string | undefined>(undefined);
  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileImage(file);
      setImagePath(URL.createObjectURL(file));
    }
  };
  const handlePrediction = () => {
    if (fileImage) {
      const formData = new FormData();
      formData.append("file", fileImage);
      mutatePredict(formData);
      setOpenModal(true);
    } else {
      console.error("No file uploaded");
    }
  };
  const imagePathResponse = dataPredict?.image_path;
  const title = dataPredict?.prediction;
  const modalContent =
    title === 0 ? "Ảnh đã qua chỉnh sửa" : "Ảnh thật chưa qua chỉnh sửa";
  return (
    <div className="container">
      <div>
        <Image
          width="400px"
          height={"400px"}
          src={imagePath ? imagePath : defaultImage}
        />
      </div>

      <div className="action">
        <div className="upload">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
        <div className="button">
          <Button type="primary" onClick={handlePrediction}>
            Detection
          </Button>
        </div>
      </div>
      <div>
        <Image
          width="400px"
          height={"400px"}
          src={imagePathResponse ? imagePathResponse : defaultImage}
        />
      </div>
      <Modal
        title="Deepfake Detection Result"
        open={openModal}
        onOk={() => setOpenModal(false)}
        loading={isLoadingPredict}
        cancelButtonProps={{ style: { display: "none" } }}
        onCancel={() => setOpenModal(false)}
      >
        <p>{modalContent}</p>
      </Modal>
    </div>
  );
};

export default HomePage;
