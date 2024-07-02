import { createAppRegisterHandler } from "@saleor/app-sdk/handlers/next";
import { saleorApp } from "../../saleor-app";
import { createLogger } from "@/lib/logger";

export default createAppRegisterHandler({
  apl: saleorApp.apl,
  allowedSaleorUrls: ["https://store-epbbnruq.saleor.cloud/graphql/"], // optional, see options below
  async onRequestVerified(req, { authData, respondWithError }) {
    const logger = createLogger({}, { msgPrefix: "onRequestVerified " });
    logger.info("Token: " + authData.token + " ");
    logger.info("Domain: " + authData.domain ?? "Empty" + " ");
  },
  async onAplSetFailed(req, { authData, respondWithError, error }) {
    const logger = createLogger({}, { msgPrefix: "onAplSetFailed " });
    logger.info("Token: " + authData.token + " ");
    logger.info("Domain: " + authData.domain ?? "Empty" + " ");
    logger.info(error);
  },
  async onAuthAplSaved(request, { authData, respondWithError }) {
    const logger = createLogger({}, { msgPrefix: "onAuthAplSaved " });
    logger.info("Token: " + authData.token + " ");
    logger.info("Domain: " + authData.domain ?? "Empty" + " ");
  },
  async onRequestStart(request, { authToken, saleorApiUrl, saleorDomain, respondWithError }) {
    const logger = createLogger({}, { msgPrefix: "onRequestStart " });
    logger.info("Token: " + authToken + " ");
    logger.info("Domain: " + saleorDomain ?? "Empty" + " ");
    logger.info("Url: " + saleorApiUrl ?? "Empty" + " ");
  },
});
