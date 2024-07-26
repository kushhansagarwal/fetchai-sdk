import FetchAI from "./index";
import * as types from "./types/api";

async function testFetchAI() {
  const token: types.Token = "test-token";
  const fetchAI = new FetchAI(token);

  console.log("Initial token:", fetchAI["token"]);

  const newToken: types.Token =
    "eyJhbGciOiJSUzI1NiJ9.eyJleHAiOjE3Mjk2NjcwMDAsImdycCI6ImludGVybmFsIiwiaWF0IjoxNzIxODkxMDAwLCJpc3MiOiJmZXRjaC5haSIsImp0aSI6ImEzYWQ3MTNhMmM0MTk3YzcwY2JlMTRkZiIsInNjb3BlIjoiYXYiLCJzdWIiOiIzYjFjOWMxYjQ3ODIzYjhiOWU2ODU2NGZhMWQzYzUwMWUyZWE1ZWM1ZWQ4MWE3OTYifQ.QnKCggtcc6ECqHOtxDXcZsDzLhVZ6GvmtAoNegFSPV_ErOvhDHP_-YHfaxFwIlR8M-hoGCndx_04g-Iz-ATK9hLME-xxY8sYqKpG_guyPZ-z7nn93IOokgIsJxTztt9YTKr5u-0otgt9B4cZSVqZw7RU-MVWAMvD3r9pOvVZbg_x2T68yBpgEblw-YGtiDGe9zZuGN5FKk9wFcJ1OT86nNPfv1jCNhcDMI_bA4BSt7kxh_g1wedEGonnlkQcvMZ4EPdX0fe-rM9yaHbcVB_X5YmO7m0xQBWZ-N5HzjdFyQEYMqPvy_Rc5FpeQeOw5wPcl3Q0sqH3Ju_lyBAdHMwlzA";
  await fetchAI.authenticate(newToken);

  console.log("Updated token:", fetchAI["token"]);

  const newAgentResponse = await fetchAI.deleteAgent(
    "agent1q0ct0n95qge5suj30tqxxgylrtaslrdr4csweduyt7mhphcdlel8jdnvr8r"
  );
  console.log("New Agent Response:", newAgentResponse);
}

testFetchAI().catch(console.error);
