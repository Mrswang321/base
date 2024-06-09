#import "AboutViewController.h"
#import <WebKit/WebKit.h>

@interface AboutViewController ()
@property(strong, nonatomic) WKWebView *webview;
@end

@implementation AboutViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    //    获得手机的屏幕大小
    CGRect rect = CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height);
    
    //    创建能够打开网页的窗口在手机上是 webview
    self.webview = [[WKWebView alloc] initWithFrame:rect];
    
    //   关闭弹簧效果
    self.webview.scrollView.bounces = NO;
    
    //    写请求，加载本地文件
    NSString *path = [[NSBundle mainBundle] pathForResource:@"www/about.html" ofType:nil];
    NSURL *url = [NSURL fileURLWithPath:path];
    NSURLRequest *request = [NSURLRequest requestWithURL:url];
    
    
    //  窗口加载请求
    [self.webview loadRequest:request];
    //
    
    //    在手机程序上显示窗口
    [self.view addSubview:self.webview];
    
    
}

- (void)viewWillAppear:(BOOL)animated{
    [super viewWillAppear: animated];
    self.tabBarController.tabBar.hidden = YES;
    
}
- (void)viewWillDisappear:(BOOL)animated{
    [super viewWillDisappear: animated];
    self.tabBarController.tabBar.hidden = NO;

}
@end


