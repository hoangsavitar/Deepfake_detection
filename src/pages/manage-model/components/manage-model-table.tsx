import { DeleteOutlined, HistoryOutlined } from "@ant-design/icons";
import { Col, Pagination, Row, Spin } from "antd";
import Table, { ColumnsType } from "antd/es/table";

interface ListModelReport{
    data:any,
}
interface ReportModelHistory {
    key: React.Key;
    name: string;
  }
const ManageModelTable: React.FC<ListModelReport> = () => {
    const columModel: ColumnsType<ReportModelHistory> = [
        {
          title: "STT",
          align: "center",
        //   render: (_value, _record, index) => {
        //     return (isPage - 1) * 10 + index + 1;
        //   },
        },
        {
          title: "Link rtsp camera",
          align: "center",
          dataIndex: "rtsp_cam",
        },
        {
          title: "Vị trí",
          align: "center",
          dataIndex: "location",
        },
        {
          title: "Thêm bởi",
          align: "center",
          dataIndex: "add_by",
        },
        {
          title: "Trạng thái camera",
          align: "center",
          render: (_, data: any) => {
            return (
              <>
                <div className="checkbox-wrapper-55">
                  <label className="rocker rocker-small">
                    <input
                      type="checkbox"
                      checked={data?.is_activate}
                    //   onChange={(event) => handleToggleCamera(event, data)}
                    />
                    <span className="switch-left">Bật</span>
                    <span className="switch-right">Tắt</span>
                  </label>
                </div>
              </>
            );
            // function handleToggleCamera(event: React.ChangeEvent<HTMLInputElement>, data: any) {
            //   const isChecked = event.target.checked;          
            //   setValueChangeStatusCamera(isChecked)
            //   setIsModalChangeStatusCamera(true);
            //   setIsCameraSelect(data);
            // }
          },
        },
        {
          title: "Chức năng",
          align: "center",
          render: (_, data: any) => {
            return (
              <>
                <HistoryOutlined
                  className="history-button"
                //   onClick={() => handleRtsp(data)}
                />
                <DeleteOutlined
                  className="delete-button"
                  onClick={() => handleDeteteSegment(data)}
                />
              </>
            );
            function handleDeteteSegment(data: any) {
            //   setIsCameraSelect(data);
            //   setIsModalDeleteCamera(true);
            }
          },
        },
      ];
  return (
    <>
      <Col span={24}>
        {/* {isLoading ? ( */}
          {/* <Row justify={"center"}>
            <Spin size="large" />
          </Row> */}
        {/* ) : ( */}
          <>
            <Table
              columns={columModel}
            //   dataSource={data ?? []}
              pagination={false}
            />
            <Row justify={"end"} style={{ marginTop: "20px" }}>
              <Pagination
                // current={isPage}
                // total={total_pages * 10}
                // // showSizeChanger={true}
                // onChange={changePage}
              />
            </Row>
          </>
        {/* )} */}
      </Col>
    </>
  )
}

export default ManageModelTable
