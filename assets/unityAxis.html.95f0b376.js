import{_ as t,V as o,W as n,a0 as s}from"./framework.f50e9d47.js";const r={},e=s("<p>unity的Axis设置，路径为Edit-&gt;Project setting-&gt;Input:</p><p>属性如下：</p><p><strong>Name</strong>：<mark>按键名</mark>该键的名称，可以在脚本编程中直接引用他。比如：Input.GetButtonDown(“Jump”);</p><p><strong>Descriptive Name</strong>:==【描述名】==在游戏的独立机构中的配置对话框中，当控制值为正时候所显示的名称。默认空白。</p><p><strong>Negative Descriptive Name</strong>：==【负描述】==在游戏的独立机构中的配置对话框中，当控制值为负的时候所显示的名称。</p><p><strong>Nagative Button</strong>：==【负向按钮】==玩家按下这个按钮来让被控制物体向负方向运动。</p><p><strong>Positive Button</strong>：==【正向按钮】==玩家按下这个按钮让被控制物体向正方向运动。</p><p><strong>Alt Negative Button</strong>: 玩家可以使用的备选负向按钮，比如方向键和WASD</p><p><strong>Alt Positive Button</strong>：玩家可以使用的备选争相按钮。</p><p><strong>Gravity</strong>：==【重力】==如果玩家停止输入，该轴将恢复到空挡或0速度，其单位为单位每秒。</p><p><strong>Dead</strong>：==【盲区】==可以用在模拟控制。在模拟控制器上，在这个范围内的任何值都会映射到空档不会提供任何输入。</p><p><strong>Sensitivity</strong>：==【灵敏度】==可以用于数字控制，他是该轴向给定得值移动的速度。正负都可，单位为单位每秒。</p><p><strong>Snap</strong>：==【对齐】==如果选中，可以确保在同时按下正向和负向按钮时候该轴的值为空挡。</p><p><strong>Invert</strong>：==【反转】==迅速交换正向和负向控制键。</p><p><strong>Type</strong>：==【类型】==该键对应的输入设备类型。可以为Key，MouseButton，MouseMove，JoystickAxis，或Window Movement。</p><p><strong>Axis</strong>：==【轴】==这个控制方式有该输入设备的哪条轴指挥。这可受不同游戏手柄影响。</p><p><strong>JoyNum</strong>：==【操作杆编号】==多个操作杆在机器上市后，决定哪个哪个操作杆控制给定的轴。可以选择从所有的操作杆接受输入，或是为其制定一个特定的。</p>",17),p=[e];function g(i,a){return o(),n("div",null,p)}const u=t(r,[["render",g],["__file","unityAxis.html.vue"]]);export{u as default};
