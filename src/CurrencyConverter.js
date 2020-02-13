import React, { useState, useEffect } from 'react';
import {
  Card,
  Typography,
  Input,
  Row,
  Col,
  Select,
  Spin,
  Icon,
  Button
} from 'antd';

const currencies = ['USD', 'AUD', 'JPY', 'EUR'];
const { Title, Text } = Typography;
const { Group } = Input;
const { Option } = Select;
const antIcon = <Icon type="loading" spin />;

function CurrencyConverter() {
  const [base, setBase] = useState('USD');
  const [amount, setAmount] = useState('');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function convert() {
      if (amount) {
        const numAmount = parseFloat(amount);

        if (typeof numAmount !== 'number') {
          return null;
        }

        setLoading(true);

        const res = await fetch(
          `https://api.exchangeratesapi.io/latest?base=${base}`
        );
        const data = await res.json();

        const newDate = data.date;
        const newResult = (
          parseFloat(data.rates[toCurrency]) * numAmount
        ).toFixed(4);

        setResult(newResult);
        setDate(newDate);
        setLoading(false);
      }
    }

    convert();
  }, [amount, base, toCurrency]);

  const options = currencies.map(item => ({ value: item, label: item }));

  const handleChange = e => {
    const { value } = e.target;

    if (value) {
      return setAmount(value);
    }
    setAmount('');
    setResult('');
  };

  const handleSelectBase = selectedCurrency => {
    return setBase(selectedCurrency);
  };

  const handleSelectTo = selectedCurrency => {
    return setToCurrency(selectedCurrency);
  };

  const handleSwap = () => {
    const newBase = toCurrency;
    const newToCurrency = base;

    setBase(newBase);
    setToCurrency(newToCurrency);
  };

  return (
    <Card>
      <Text code style={{ fontSize: 16 }}>
        {amount || 0} {base} is equivalent to
      </Text>

      <Title level={2}>
        {loading ? (
          <Spin indicator={antIcon} />
        ) : (
          `${result || 0} ${toCurrency}`
        )}
      </Title>
      <Text type="secondary">As of {date || '---'}</Text>
      <div className="sp_v_20" />
      <div className="in-flex">
        <div>
          <Group size="large">
            <Row gutter={6}>
              <Col span={20}>
                <Input
                  placeholder="Base currency value"
                  value={amount}
                  onChange={handleChange}
                  type="number"
                />
              </Col>
              <Col span={4}>
                <Select value={base} onChange={handleSelectBase}>
                  {options.map(item => (
                    <Option key={item.value} value={item.value}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
              </Col>
            </Row>
          </Group>
        </div>
        <div className="sp_v_10" />
        <div>
          <Button
            type="button"
            onClick={handleSwap}
            shape="circle"
            disabled={loading}
          >
            {loading ? <Spin indicator={antIcon} /> : <Icon type="sync" />}
          </Button>
        </div>
        <div className="sp_v_10" />
        <div>
          <Group size="large">
            <Row gutter={6}>
              <Col span={20}>
                <Input
                  placeholder="Coverted currency value"
                  value={result}
                  onChange={() => {}}
                  disabled
                />
              </Col>
              <Col span={4}>
                <Select value={toCurrency} onChange={handleSelectTo}>
                  {options.map(item => (
                    <Option key={item.value} value={item.value}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
              </Col>
            </Row>
          </Group>
        </div>
      </div>
    </Card>
  );
}

export default CurrencyConverter;
