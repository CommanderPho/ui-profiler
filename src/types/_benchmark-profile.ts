/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type NumberOfRepeats = number;
/**
 * Whether to take multiple profiles, one for each repeat (mico) or one profile averaging across all repeats (macro). Macro-profiling includes setup and cleanup steps which may bias the results for scenarios where expensive operations are performed in these steps. Micro-profiling may be unsuitable for very fast scenarios, and when the browser limits the sampling interval.
 */
export type ProfilingScale = 'micro' | 'macro';
/**
 * Sampling interval (in milliseconds). Browsers are not required to take samples at this rate and may increase it (for example for privacy protection).
 */
export type SampleInterval = number;
/**
 * When the limit of samples gets exceeded, the profiling will stop prematurely.
 */
export type SampleBufferSizeLimit = number;

export interface ProfileBenchmarkOptions {
  repeats: NumberOfRepeats;
  scale: ProfilingScale;
  sampleInterval: SampleInterval;
  maxBufferSize: SampleBufferSizeLimit;
  [k: string]: any;
}