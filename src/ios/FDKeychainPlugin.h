
#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>
#import <Cordova/CDV.h>

@interface FDKeychainPlugin : CDVPlugin {
}

- (void) get:(CDVInvokedUrlCommand*)command;
- (void) set:(CDVInvokedUrlCommand*)command;
- (void) remove:(CDVInvokedUrlCommand*)command;

@end