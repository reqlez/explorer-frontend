/**
 * Blockchain explorer
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ADDigest } from './aDDigest';
import { Digest32 } from './digest32';
import { ModifierId } from './modifierId';

export interface BlockHeader {
  id: ModifierId;
  timestamp: number;
  parentId: ModifierId;
  version: number;
  /**
   * Interlinks
   */
  interlinks: Digest32[];
  adProofsRoot: Digest32;
  stateRoot: ADDigest;
  transactionsRoot: Digest32;
  nBits: number;
  extensionHash: string;
  /**
   * Base58-encoded equihash solutions
   */
  equihashSolutions: string;
  height: number;
  size: number;
}