import { createClient } from "@supabase/supabase-js";
import { Button , Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { theme } from 'antd';
import { CloseOutlined} from '@ant-design/icons'
import {  Row , Col } from 'antd';
import "../Auth/auth.css"

const supabase = createClient('https://yjfcopvmnoefmqlerdxc.supabase.co' ,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZmNvcHZtbm9lZm1xbGVyZHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMTk3MDUsImV4cCI6MTk5NjU5NTcwNX0.UAlO3qY6sU4fqOqUEpzuOEyStPMf1eQNR1JepD34QS8' );


export default function SignUp(){

    const navigate = useNavigate();

    const [form] = Form.useForm();


    const  handleFinish =  async ( )  => {

        const { Email , Password } = form.getFieldsValue();

       
        const { data, error } = await supabase.auth.signUp({
            email: Email,
            password: Password,
        })
        

        if(error){

            alert("Please Retype");
            form.resetFields();

        }
        else if(data){
            
            navigate("/");
            alert("Register Succes!")
            
        }

    }
           
        


      



        return (
            <div className="row flex flex-center">
              
              <div className="col-9 form-widget">
              <div class="Cross"> 
                  <a href="/"><CloseOutlined/></a>
                </div> 
               
                <h1 className="header">Login</h1>
        
                    <div>
                        <Form
                        form={form}
                        name="basic"
                        labelCol={{span: 8}}
                        labelAlign="left"
                        wrapperCol={{span: 16}}
                        onFinish={handleFinish}
                        initialValues={{ remember: true }}
                        >
                        <Form.Item
                            label="Email"
                            name="Email"
                            rules={[
                            {
                                type: 'email',
                                required: true,
                                message: '請輸入mail',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="Password"
                            rules={[
                            {
                                type: 'string',
                                required: true,
                                max:16,
                                min:4,
                                message: '密碼介於4-16個字元',
                            },
                            ]}
                        >
                        <Input.Password className="OOPP" />
                        </Form.Item>
                        <Form.Item
                            name="confirm"
                            label="Confirm"
                            dependencies={['Password']}
                            hasFeedback
                            rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                if (!value || getFieldValue('Password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                            ]}
                        >
                    <Input.Password  className="OOPP" />
                </Form.Item>
                        <Form.Item wrapperCol={{span: 6}}>
                            <Button type="primary" htmlType="submit">
                            送出
                            </Button>
                        </Form.Item>
                        </Form>
                    </div> 
                    </div>

        </div>
            
        
    );


}

