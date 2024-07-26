import axios from "axios";
import * as types from "./types/api";

/**
 * Class representing FetchAI for interacting with AgentVerse API.
 *
 * @class FetchAI
 * @see {@link https://agentverse.ai/docs/hosting-api|Fetch Hosting API Documentation}
 */
export class FetchAI {
  private token: types.Token;
  private baseUrl: string;

  /**
   * Handles API call errors.
   * @param {any} error - The error object.
   * @throws Will throw an error if the API call fails.
   * @private
   */
  private handleError(error: any) {
    console.error(
      "API call error:",
      error.response ? error.response.data : error.message
    );
    // throw error;
  }

  /**
   * Create a new FetchAI instance.
   * @param {string} token - The authentication token.
   * @see {@link https://agentverse.ai/docs/hosting-api#authentication|Authentication}
   */
  constructor(token: types.Token) {
    this.token = token;
    this.baseUrl = "https://agentverse.ai/v1";
  }

  /**
   * Authenticate with a new token.
   * @param {string} token - The new authentication token.
   * @returns {Promise<void>}
   * @see {@link https://agentverse.ai/docs/hosting-api#authentication|Authentication}
   */
  async authenticate(token: types.Token): Promise<void> {
    this.token = token;
  }

  /**
   * Create a new agent.
   * @param {string} name - The name of the agent.
   * @returns {Promise<types.AgentCreateResponse>} - The created agent data.
   * @see {@link https://agentverse.ai/docs/hosting-api#creating-a-new-agent|Creating a new agent}
   */
  async createAgent(name: string): Promise<types.AgentCreateResponse> {
    try {
      const response = await axios.post(
        `${this.baseUrl}/hosting/agents`,
        { name },
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );
      return response.data as types.AgentCreateResponse;
    } catch (error) {
      console.error("Error creating agent:", error);
      throw this.handleError(error);
    }
  }

  /**
   * Get all agents.
   * @returns {Promise<types.AgentListResponse>} - The list of agents.
   * @see {@link https://agentverse.ai/docs/hosting-api#getting-a-list-of-your-agents|Getting a list of your agents}
   */
  async getAgents(): Promise<types.AgentListResponse> {
    try {
      const response = await axios.get(`${this.baseUrl}/hosting/agents`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });
      return response.data as types.AgentListResponse;
    } catch (error) {
      console.error("Error fetching agents:", error);
      throw this.handleError(error);
    }
  }

  /**
   * Get a specific agent by address.
   * @param {string} agentAddress - The address of the agent.
   * @returns {Promise<types.AgentGetResponse>} - The agent data.
   * @see {@link https://agentverse.ai/docs/hosting-api#look-up-specific-agent|Look up specific Agent}
   */
  async getAgent(agentAddress: string): Promise<types.AgentGetResponse> {
    try {
      const response = await axios.get(
        `${this.baseUrl}/hosting/agents/${agentAddress}`,
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );
      return response.data as types.AgentGetResponse;
    } catch (error) {
      console.error("Error getting agent:", error);
      throw this.handleError(error);
    }
  }

  /**
   * Delete an agent by address.
   * @param {string} agentAddress - The address of the agent to delete.
   * @returns {Promise<types.AgentDeleteResponse>} - The deletion response.
   * @see {@link https://agentverse.ai/docs/hosting-api#delete-specified-agent|Delete Specified Agent}
   */
  async deleteAgent(agentAddress: string): Promise<types.AgentDeleteResponse> {
    try {
      const response = await axios.delete(
        `${this.baseUrl}/hosting/agents/${agentAddress}`,
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );
      return response.data as types.AgentDeleteResponse;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Start an agent by address.
   * @param {string} agentAddress - The address of the agent to start.
   * @returns {Promise<types.AgentStartResponse>} - The start response.
   * @see {@link https://agentverse.ai/docs/hosting-api#start-a-specific-agent|Start a specific agent}
   */
  async startAgent(agentAddress: string): Promise<types.AgentStartResponse> {
    try {
      const response = await axios.post(
        `${this.baseUrl}/hosting/agents/${agentAddress}/start`,
        {},
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );
      return response.data as types.AgentStartResponse;
    } catch (error) {
      console.error("Error starting agent:", error);
      throw this.handleError(error);
    }
  }

  /**
   * Stop an agent by address.
   * @param {string} agentAddress - The address of the agent to stop.
   * @returns {Promise<types.AgentStopResponse>} - The stop response.
   * @see {@link https://agentverse.ai/docs/hosting-api#stop-a-specific-agent|Stop a specific agent}
   */
  async stopAgent(agentAddress: string): Promise<types.AgentStopResponse> {
    try {
      const response = await axios.post(
        `${this.baseUrl}/hosting/agents/${agentAddress}/stop`,
        {},
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );
      return response.data as types.AgentStopResponse;
    } catch (error) {
      console.error("Error stopping agent:", error);
      throw this.handleError(error);
    }
  }

  /**
   * Get the code of an agent by address.
   * @param {string} agentAddress - The address of the agent.
   * @returns {Promise<types.AgentGetCodeResponse>} - The agent code.
   * @see {@link https://agentverse.ai/docs/hosting-api#look-up-agent-code|Look up Agent code}
   */
  async getCode(agentAddress: string): Promise<types.AgentGetCodeResponse> {
    try {
      const response = await axios.get(
        `${this.baseUrl}/hosting/agents/${agentAddress}/code`,
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );
      return response.data as types.AgentGetCodeResponse;
    } catch (error) {
      console.error("Error getting agent code:", error);
      throw this.handleError(error);
    }
  }

  /**
   * Update the code of an agent by address.
   * @param {string} agentAddress - The address of the agent.
   * @param {string} code - The new code for the agent.
   * @returns {Promise<types.AgentUpdateCodeResponse>} - The update response.
   * @see {@link https://agentverse.ai/docs/hosting-api#update-agent-code-for-a-specific-agent|Update Agent Code for a specific Agent}
   */
  async updateCode(
    agentAddress: string,
    code: string
  ): Promise<types.AgentUpdateCodeResponse> {
    try {
      const response = await axios.put(
        `${this.baseUrl}/hosting/agents/${agentAddress}/code`,
        { code },
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );
      return response.data as types.AgentUpdateCodeResponse;
    } catch (error) {
      console.error("Error updating agent code:", error);
      throw this.handleError(error);
    }
  }

  /**
   * Get the logs of an agent by address.
   * @param {string} agentAddress - The address of the agent.
   * @returns {Promise<types.AgentGetLatestLogsResponse>} - The agent logs.
   * @see {@link https://agentverse.ai/docs/hosting-api#get-current-agent-usage|Get current Agent usage}
   */
  async getLatestAgentLogs(
    agentAddress: string
  ): Promise<types.AgentGetLatestLogsResponse> {
    try {
      const response = await axios.get(
        `${this.baseUrl}/hosting/agents/${agentAddress}/logs/latest`,
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );
      return response.data as types.AgentGetLatestLogsResponse;
    } catch (error) {
      console.error("Error getting agent logs:", error);
      throw this.handleError(error);
    }
  }

  /**
   * Delete the logs of an agent by address.
   * @param {string} agentAddress - The address of the agent.
   * @returns {Promise<types.AgentDeleteLogsResponse>} - The deletion response.
   * @see {@link https://agentverse.ai/docs/hosting-api#delete-the-latest-logs-for-an-agent|Delete the latest logs for an Agent}
   */
  async deleteAgentLogs(
    agentAddress: string
  ): Promise<types.AgentDeleteLogsResponse> {
    try {
      const response = await axios.delete(
        `${this.baseUrl}/hosting/agents/${agentAddress}/logs`,
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );
      return response.data as types.AgentDeleteLogsResponse;
    } catch (error) {
      console.error("Error deleting agent logs:", error);
      throw this.handleError(error);
    }
  }

  /**
   * Get the current usage of an agent by address.
   * @param {string} agentAddress - The address of the agent.
   * @returns {Promise<types.AgentGetCurrentUsageResponse>} - The current usage data.
   * @see {@link https://agentverse.ai/docs/hosting-api#get-current-agent-usage|Get current Agent usage}
   */
  async getAgentCurrentUsage(
    agentAddress: string
  ): Promise<types.AgentGetCurrentUsageResponse> {
    try {
      const response = await axios.get(
        `${this.baseUrl}/hosting/usage/agents/${agentAddress}/current`,
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );
      return response.data as types.AgentGetCurrentUsageResponse;
    } catch (error) {
      console.error("Error getting agent current usage:", error);
      throw this.handleError(error);
    }
  }
}

export type { types };
export default FetchAI;
