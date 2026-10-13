---
title: Writing a Faster GEMM Kernel on a Laptop GPU
date: 2026-09-14
description: What changes when your entire VRAM budget is 8 GB.
draft: true # <-- sample text, not yours. Rewrite then set to false.
tags: ['CUDA', 'Performance']
---
# Remove the Draft flag to display blog onto the blog webpage.

## Introduction

blash blah

## Implementation

Some CUDA code

```cpp
__global__ void gemm_naive(const float* A, const float* B, float* C,
                           int M, int N, int K) {
  int row = blockIdx.y * blockDim.y + threadIdx.y;
  int col = blockIdx.x * blockDim.x + threadIdx.x;
  if (row >= M || col >= N) return;

  float acc = 0.0f;
  for (int k = 0; k < K; ++k) {
    acc += A[row * K + k] * B[k * N + col];
  }
  C[row * N + col] = acc;
}
```

### Random Section

Blah blah

## Shared memory tiling

Blah blah

## Results

| placeholder  | placeholder | placeholder |
| ------------ | ----------- | ----------- |
| placeholder  | 142.0       | 4%          |
| placeholder  | 18.4        | 31%         |
| placeholder  | 7.1         | 79%         |
