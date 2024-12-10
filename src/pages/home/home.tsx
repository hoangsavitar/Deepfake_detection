import { Button, Image } from "antd";
import "./home.css";
import { UploadOutlined } from "@ant-design/icons";

const HomePage = () => {
  return (
    <div className="container">
      <div>
        <Image
          width="400px"
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />
      </div>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
      <div>
        <Image
          width="400px"
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />
      </div>
    </div>
  );
};

export default HomePage;
