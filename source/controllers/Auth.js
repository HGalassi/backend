const { parse } = require('querystring');

module.exports = {


    async senha6Receive (request, response){
        
        // const {idSessaoFrwk, ticketSegurancaFrwk, agencia, conta, digitoConta,
        //     tipoConta,titularidade, canal, versaoEstrutAutd, codEstrutAutd, 
        //     faseServico, idSessaoCanal, tipoUsuarioFrwk} = request.body.req;

        //  let [] = request.body;
        console.log(request.body.tipoConta);
        let _tipoConta = request.body.tipoConta;
                if (_tipoConta < 0 && !tipoConta){
                  let ret = {
                        "faseServico": 1,
                        "codProxDispositivo": 1,
                        "codRetorno": "4",
                        "msgRetorno": "",
                        "tamTokenValidDigital": 0,
                        "tokenValidDigital": null,
                        "referenciaTanCode": null,
                        "celulaTanCode": 0,
                        "referenciaToken": null,
                        "protocoloTokenSs": "0",
                        "captchaId": null,
                        "captchaTipo": null,
                        "captchaLocalVal": null,
                        "captchaDadosTam": null,
                        "captchaDados": null,
                        "protocoloAssinatura": null,
                        "horarioProtocoloAssinatura": null
                      }
                      return response.json({ret });
                  }else {
                    let ret = {
                        "faseServico": 1,
                        "codProxDispositivo": 4,
                        "codRetorno": "4",
                        "msgRetorno": "",
                        "tamTokenValidDigital": 0,
                        "tokenValidDigital": null,
                        "referenciaTanCode": null,
                        "celulaTanCode": 0,
                        "referenciaToken": null,
                        "protocoloTokenSs": "0",
                        "captchaId": null,
                        "captchaTipo": null,
                        "captchaLocalVal": null,
                        "captchaDadosTam": null,
                        "captchaDados": null,
                        "protocoloAssinatura": null,
                        "horarioProtocoloAssinatura": null
                      }
                      return response.json({ret });
                }
    },

     async senha6 (request, response){

        const res = {
            "faseServico": 1,
            "codProxDispositivo": 3,
            "codRetorno": "4",
            "msgRetorno": "",
            "tamTokenValidDigital": 0,
            "tokenValidDigital": '',
            "referenciaTanCode": '',
            "celulaTanCode": 0,
            "referenciaToken": '',
            "protocoloTokenSs": "0",
            "captchaId": '',
            "captchaTipo": '',
            "captchaLocalVal": '',
            "captchaDadosTam": '',
            "captchaDados": '',
            "protocoloAssinatura": '',
            "horarioProtocoloAssinatura": ''
        }
        
        return response.json({res })

    },
    async _senha6 (request, response){

        const res = {
            "faseServico": 1,
            "codProxDispositivo": 3,
            "codRetorno": "4",
            "msgRetorno": "",
            "tamTokenValidDigital": 0,
            "tokenValidDigital": null,
            "referenciaTanCode": null,
            "celulaTanCode": 0,
            "referenciaToken": null,
            "protocoloTokenSs": "0",
            "captchaId": null,
            "captchaTipo": null,
            "captchaLocalVal": null,
            "captchaDadosTam": null,
            "captchaDados": null,
            "protocoloAssinatura": null,
            "horarioProtocoloAssinatura": null
        }
        return response.json(res)
    },
    async token (request, response){

        const res = {
            "faseServico": 1,
            "codProxDispositivo": 4,
            "codRetorno": "4",
            "msgRetorno": "",
            "tamTokenValidDigital": 0,
            "tokenValidDigital": null,
            "referenciaTanCode": null,
            "celulaTanCode": 0,
            "referenciaToken": "0000053127",
            "protocoloTokenSs": "0",
            "captchaId": null,
            "captchaTipo": null,
            "captchaLocalVal": null,
            "captchaDadosTam": null,
            "captchaDados": null,
            "protocoloAssinatura": null,
            "horarioProtocoloAssinatura": null
        }

        return response.json({res})
    },
    async fnc ( request, response){
        const res = { 
            "message " : "Olá",
            "status" : "200"
        }
        return response.json(res);
    }
}