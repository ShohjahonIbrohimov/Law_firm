import React, { useState, useEffect } from "react";
import { Table, Input, Button, Space, Tag } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined, FormOutlined } from "@ant-design/icons";
import AnswerQuestionForm from "./AnswerQuestionForm";
import GModal from "../Global/GModal";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { startCrudQuestions } from "../../redux/questions/questions.actions";

const QuestionsTable = ({ searchInput }) => {
  const [searchText, setsearchText] = useState("");
  const [searchedColumn, setsearchedColumn] = useState("");
  const [open, setopen] = useState(false);
  const [currentQuestion, setcurrentQuestion] = useState(null);
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionsReducer.questions);
  const [questionsFiltered, setquestionsFiltered] = useState([]);
  const user = useSelector((state) => state.authReducer.user);

  useEffect(() => {
    if (user.role !== "manager" && questions) {
      setquestionsFiltered(questions.filter((q) => q.author._id === user._id));
    } else {
      setquestionsFiltered(questions);
    }
  }, [questions]);

  useEffect(() => {
    dispatch(
      startCrudQuestions({
        url: "/api/questions/getNeed",
        data: {
          need: "all",
        },
        method: "POST",
        afterSuccess: () => {},
        afterError: () => {},
      })
    );
  }, []);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size='small'
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              confirm({ closeDropdown: false });
              setsearchText(selectedKeys[0]);
              setsearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setsearchText(selectedKeys[0]);
    setsearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setsearchText("");
  };

  const handleReply = (id) => {
    setcurrentQuestion(
      questionsFiltered.filter((d) => d.question_id === id)[0]
    );
    setopen(true);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "question_id",
      ...getColumnSearchProps("question_id"),
    },
    {
      title: "Name",
      dataIndex: "author",
      ...getColumnSearchProps("author"),
      render: (author) => author?.fullName,
    },
    {
      title: "Savol holati",
      dataIndex: "answer_body",
      ...getColumnSearchProps("answered"),
      render: (answer_body) => {
        return (
          <Tag color={answer_body ? "green" : "red"}>
            {answer_body ? "JAVOB BERILDI" : "JAVOB BERILMADI"}
          </Tag>
        );
      },
    },
    {
      title: "Amallar",
      dataIndex: "question_id",
      render: (data) => (
        <div>
          {user.role === "manager" && (
            <Button
              onClick={() => handleReply(data)}
              type='primary'
              icon={<FormOutlined />}
            >
              Javob yozish
            </Button>
          )}
        </div>
      ),
      width: "8%",
    },
  ];
  return (
    <div>
      <GModal
        title='Savolga javob berish'
        open={open}
        setopen={setopen}
        width={670}
      >
        <h3>Savol:</h3>
        <p>{currentQuestion?.body}</p>
        <AnswerQuestionForm currentQuestion={currentQuestion} />
      </GModal>
      <Table
        columns={columns}
        bordered
        rowKey={(d) => d.question_id}
        dataSource={questionsFiltered}
        expandable={{
          expandedRowRender: (question) => (
            <div>
              <div style={{ marginBottom: "1rem" }}>
                <h3>Savol:</h3>
                <p style={{ margin: 0 }}>{question.body}</p>
              </div>
              <div>
                <h3>Javob:</h3>
                <p style={{ margin: 0 }}>{question?.answer_body}</p>
              </div>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default QuestionsTable;
