export const singleSelectList = [
  {
    label: "所属部门",
    placeholder: "请选择所属部门",
    value: "1号部门",
    options: [
      {
        value: "1号部门",
        options: {
          disabled: true,
        },
      },
      {
        value: "2号部门",
        options: {
          disabled: true,
        },
      },
      {
        value: "3号部门",
        options: {
          disabled: false,
        },
      },
    ],
    onChange: (e: any) => {
      console.log(e);
    },
  },
];
