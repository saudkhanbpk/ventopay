import {
  Card,
  Row,
  Col,
  Typography,
  Button,
  Space,
  Input,
  List,
  Checkbox,
} from "antd";

import { Line } from "@ant-design/charts";
import { useState } from "react";
const { Title, Text } = Typography;

const StatCard = ({ value, label, color }) => (
  <Card style={{ textAlign: "center", background: color }}>
    <Title level={2} style={{ margin: 0 }}>
      {value}
    </Title>
    <Text>{label}</Text>
  </Card>
);

const FinancialCard = ({ label, value, period }) => (
  <Card style={{ textAlign: "left" }}>
    <Text>{label}</Text>
    <Title level={3} style={{ margin: "8px 0" }}>
      {value}
    </Title>
    <Text type="secondary">{period}</Text>
  </Card>
);

const DashboardContent = () => {
  const data = [
    { date: "12 Oct", orders: 1 },
    { date: "13 Oct", orders: 1.2 },
    { date: "14 Oct", orders: 1.4 },
    { date: "15 Oct", orders: 1.6 },
    { date: "16 Oct", orders: 1.8 },
    { date: "17 Oct", orders: 2.0 },
    { date: "18 Oct", orders: 2.2 },
    { date: "19 Oct", orders: 2.4 },
    { date: "20 Oct", orders: 2.8 },
  ];

  const config = {
    data,
    xField: "date",
    yField: "orders",
    smooth: true,
    color: "#40a9ff",
    point: {
      size: 5,
      shape: "diamond",
    },
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "get beers for the evening",
      completed: false,
      date: "Oct 10 2024 11:00 am",
    },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          completed: false,
          date: new Date().toLocaleString(),
        },
      ]);
      setNewTodo("");
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <div style={{ padding: "2px" }}>
        <Card>
          <Row justify="space-between" align="middle">
            <Col>
              <Title level={2}>Hello, Admin Admin 👋</Title>
              <Text>Let's check your stats today!</Text>
            </Col>
            <Col>
              <Space>
                <Button>This week</Button>
                <Button type="primary">This month</Button>
                <Button>This year</Button>
              </Space>
            </Col>
          </Row>
        </Card>

        <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
          <Col xs={24} sm={12} md={8} lg={4}>
            <StatCard value={3} label="In progress orders" color="#e6f7ff" />
          </Col>
          <Col xs={24} sm={12} md={8} lg={4}>
            <StatCard value={0} label="Cancelled orders" color="#fff1f0" />
          </Col>
          <Col xs={24} sm={12} md={8} lg={4}>
            <StatCard value={0} label="Delivered orders" color="#f6ffed" />
          </Col>
          <Col xs={24} sm={12} md={8} lg={4}>
            <StatCard value={7} label="Out of stock products" color="#fff2e8" />
          </Col>
          <Col xs={24} sm={12} md={8} lg={4}>
            <StatCard value={16} label="Total products" color="#ffffff" />
          </Col>
          <Col xs={24} sm={12} md={8} lg={4}>
            <StatCard value={0} label="Order reviews" color="#f9f0ff" />
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
          <Col xs={24} sm={12} md={6}>
            <FinancialCard
              label="Total earned"
              value="0.00 $"
              period="Last 30 days"
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <FinancialCard
              label="Delivery earning"
              value="0.00 $"
              period="Last 30 days"
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <FinancialCard
              label="Total order tax"
              value="0.00 $"
              period="Last 30 days"
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <FinancialCard
              label="Total commission"
              value="0.00 $"
              period="Last 30 days"
            />
          </Col>
        </Row>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {/* Orders Section */}
        <Card style={{ width: "48%" }}>
          <Title level={3}>Orders</Title>
          <p>Total orders count</p>
          <Title level={1}>{data[data.length - 1].orders}</Title>
          <Line {...config} />
        </Card>

        {/* Todo List Section */}
        <Card style={{ width: "48%" }}>
          <Title level={3}>Todo list</Title>
          <Input
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <Button
            type="primary"
            onClick={handleAddTodo}
            icon={<i className="anticon anticon-plus" />}
          >
            Add todo
          </Button>
          <List
            size="large"
            header={
              <div>
                {todos.filter((todo) => !todo.completed).length} of{" "}
                {todos.length} remaining
              </div>
            }
            dataSource={todos}
            renderItem={(todo) => (
              <List.Item>
                <Checkbox
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                >
                  {todo.text}
                </Checkbox>
                <span>{todo.date}</span>
              </List.Item>
            )}
          />
        </Card>
      </div>
    </>
  );
};

export default DashboardContent;
