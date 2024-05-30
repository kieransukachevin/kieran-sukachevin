// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import "zone.js/testing";
import { getTestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
import { NgModule } from "@angular/core";

declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
const TestBed = getTestBed();

// Then we find all the tests.
const context = require.context("./", true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

@NgModule({
  imports: [BrowserDynamicTestingModule]
})
class GlobalTestingSetupModule {}

TestBed.resetTestEnvironment();
TestBed.initTestEnvironment(
  GlobalTestingSetupModule,
  // BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  { teardown: { destroyAfterEach: true } }
);
TestBed.configureTestingModule({
  imports: [GlobalTestingSetupModule]
});
