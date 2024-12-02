// src/test.ts
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Initialize the Angular testing environment
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Import all spec files individually instead of using require.context
import './app/components/atoms/search-bar/search-bar.component.spec';
import './app/components/molecules/recipe-card/recipe-card.component.spec';
import './app/components/organisms/recipe-grid/recipe-grid.component.spec';
import './app/pages/home/home.component.spec';
import './app/services/api.service.spec';