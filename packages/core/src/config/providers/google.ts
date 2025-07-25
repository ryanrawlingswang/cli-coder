/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Providers } from '../providers.js';
import { ModelConfig } from './base.js';

export const googleModels: ModelConfig[] = [
  {
    name: 'gemini-1.5-pro',
    tokenLimit: 2_097_152,
    description: 'Gemini 1.5 Pro - Most capable model for complex tasks',
    provider: Providers.GOOGLE,
    capabilities: {
      vision: true,
      functionCalling: true,
      streaming: true,
    },
  },
  {
    name: 'gemini-1.5-flash',
    tokenLimit: 1_048_576,
    description: 'Gemini 1.5 Flash - Fast and efficient model',
    provider: Providers.GOOGLE,
    capabilities: {
      vision: true,
      functionCalling: true,
      streaming: true,
    },
  },
  {
    name: 'gemini-2.5-pro',
    tokenLimit: 1_048_576,
    description: 'Gemini 2.5 Pro - Latest generation model',
    provider: Providers.GOOGLE,
    capabilities: {
      vision: true,
      functionCalling: true,
      streaming: true,
    },
  },
  {
    name: 'gemini-2.5-flash',
    tokenLimit: 1_048_576,
    description: 'Gemini 2.5 Flash - Latest generation fast model',
    provider: Providers.GOOGLE,
    capabilities: {
      vision: true,
      functionCalling: true,
      streaming: true,
    },
  },
  {
    name: 'gemini-2.0-flash',
    tokenLimit: 1_048_576,
    description: 'Gemini 2.0 Flash model',
    provider: Providers.GOOGLE,
    capabilities: {
      vision: true,
      functionCalling: true,
      streaming: true,
    },
  },
  {
    name: 'gemini-2.0-flash-preview-image-generation',
    tokenLimit: 32_000,
    description: 'Gemini 2.0 Flash Preview for image generation',
    provider: Providers.GOOGLE,
    capabilities: {
      imageGeneration: true,
      vision: true,
      streaming: true,
    },
  },
  {
    name: 'gemini-embedding-001',
    tokenLimit: 1_048_576,
    description: 'Gemini embedding model for vector representations',
    provider: Providers.GOOGLE,
    capabilities: {
      embedding: true,
    },
  },
];
