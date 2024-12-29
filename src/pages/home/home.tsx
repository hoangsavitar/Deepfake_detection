import { Button, Image, Modal, Select } from "antd";
import "./home.css";
import { usePredict } from "../../app/loader";
import { useState } from "react";

const HomePage = () => {
  const { Option } = Select;
  const [fileImage, setFileImage] = useState<File | null>(null);
  const [typeModel, setTypeModel] = useState<string | null>(null);
  const [modelOptions, setModelOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
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
  const handleChangeTypeModel = (value: string) => {
    setTypeModel(value);
    const selectedType = dataModelMpdelAi.find((item) => item.type === value);
    if (selectedType) {
      setModelOptions(selectedType.data);
    } else {
      setModelOptions([]);
    }
    setSelectedModel(null);
  };
  const handleChangeModel = (value: string) => {
    setSelectedModel(value);
  };
  const imagePathResponse = dataPredict?.image_path;
  const title = dataPredict?.prediction;
  const modalContent =
    title === 0 ? "Ảnh đã qua chỉnh sửa" : "Ảnh thật chưa qua chỉnh sửa";
  const dataOptionsTypeModelAi = [
    { value: "naive", label: "Naive" },
    { value: "spatial", label: "Spatial" },
    { value: "frequency", label: "Frequency" },
  ];
  const dataModelMpdelAi = [
    {
      type: "naive",
      data: [
        { value: "meso4", label: "Meso4" },
        { value: "medolncep", label: "Medolncep" },
        { value: "cnnaug", label: "CNN-Aug" },
      ],
    },
    {
      type: "spatial",
      data: [{ value: "xception", label: "Xception" }],
    },
    {
      type: "frequency",
      data: [
        { value: "efficientB4", label: "EfficientB4" },
        { value: "capsule", label: "Capsule" },
        { value: "fwa", label: "FWA" },
        { value: "facexray", label: "FaceXray" },
        { value: "ffd", label: "FFD" },
        { value: "core", label: "Core" },
        { value: "recce", label: "Recce" },
        { value: "ucf", label: "UCF" },
        { value: "f3net", label: "F3Net" },
        { value: "spsl", label: "SPSL" },
        { value: "srm", label: "SRM" },
      ],
    },
  ];

  return (
    <div className="container">
      <div>
        <Image
          width="400px"
          height={"400px"}
          src={imagePath ? imagePath : defaultImage}
        />
        <div className="upload">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
      </div>
      <div className="action">
        <div className="select">
          <Select
            placeholder="Select model type"
            style={{ width: 200 }}
            onChange={handleChangeTypeModel}
            value={typeModel}
          >
            {dataOptionsTypeModelAi.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
          <Select
            placeholder="Select model"
            style={{ width: 200 }}
            onChange={handleChangeModel}
            value={selectedModel}
          >
            {modelOptions.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
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
