项目亮点：

1.自行封装 touch 事件用于轮播手势操作中

2.封装轮播图

3.封装scroll事件，采用添加任务的形式循环调用

4.向scroll队列添加卡片出现加载下一卡片任务，并删除本任务


项目问题：

未把click事件替换为touch事件，因为click在移动端存在大约300ms延迟，这里就不替换了
