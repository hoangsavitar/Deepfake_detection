import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Col, Pagination, Row, Table } from "antd";
import { ColumnsType } from "antd/es/table";

interface ReportModelHistory {
  key: React.Key;
  type: string;
  model: string;
}
interface ListModelReport {
  data: ReportModelHistory[];
}

const ManageModelTable: React.FC<ListModelReport> = ({ data }) => {
  const columModel: ColumnsType<ReportModelHistory> = [
    {
      title: "STT",
      align: "center",
      render: (_value, _record, index) => {
        return index + 1;
      },
    },
    {
      title: "Model type",
      align: "center",
      dataIndex: "type",
    },
    {
      title: "Model",
      align: "center",
      dataIndex: "model",
    },
    {
      title: "Chức năng",
      align: "center",
      render: (_, data: any) => {
        return (
          <>
            <EditOutlined className="history-button" />
            <DeleteOutlined
              className="delete-button"
              onClick={() => handleDeleteSegment(data)}
            />
          </>
        );
        function handleDeleteSegment(data: any) {
          console.log("Delete", data);
        }
      },
    },
  ];

  return (
    <>
      <Col span={24}>
        <Table columns={columModel} dataSource={data} pagination={false} />
        <Row justify={"end"} style={{ marginTop: "20px" }}>
          <Pagination
            defaultCurrent={1}
            total={50}
          />
        </Row>
      </Col>
    </>
  );
};

export default ManageModelTable;
