const inputs =
    [
        "jVTBgVbgJQVrTLRRsLvRzWcZvnDs",
        "dhtmhfdfNlNNldfqmPCflqGbNZDHsDWcRzvczWsczZNzHz",
        "tmwwwCCfbJSMbwMb",
        "hsrZZhHlhrHmPPbMbDFDQdnQgLfMFDdDQQ",
        "GpBtwtqrcCcjgnLgqfgDDgRn",
        "cJwVwpCpGJctJtBcCrSCGrVJhlsbvSvTvbmHmmsWmHslmsHm",
        "gCtWJvmfmGGwVVMhJw",
        "nzRSpZbSVFFRDFSDzcplddqplqMhQMclMp",
        "zFLszzRTDnZnbTZTRZsVNgCjrvfvgtvNmtfvLW",
        "glRQRpQQtQtGtQws",
        "TnmbLqvBFRFFLPBFnPbvRBhshTtHWhwzdwtHdsdzWhws",
        "qmCLPNmCFnLBnmPPqVbFLRrJjVggDgJjlZVVDjDlDD",
        "vRRgpWvPQFdTFDDNQs",
        "bqtCmltmlbwqLVLZqwtmLBBTMcGBddTTBgFNGcZGMD",
        "bbtmJmjlVlwblwwbwzbbvrrznvzShgRhRvhfWrWn",
        "ZMhThfNcpbbMNNjsHpmpsRqsPmRs",
        "wQjDgggQDPqqDlsD",
        "SCwSzvLVCSVtQVgLnrccfdGdTdZfcZMtjJhG",
        "wNnNmNHnNPPwwPGCrLSZZvdVVZvBtMMvdm",
        "WQzlhzjzbBtMMlBrMl",
        "szbgWhJjTTcsWTqgzsqcsGHfwNcwfwnHHrCGCPPGwr",
        "CNsbpFCMSrmDhQHNNGmH",
        "fQPPPcqvljQzjVDDgRBhGGqDgqqD",
        "ZctlcVzcfltQtnrndbQMCM",
        "NQjQjQvZvZjcvrrrNjgTQgBQwTJsJswJlbGstqqtmGhmwhqw",
        "PWpHRzRnPHHSCnPFwlqhbtqGZClJqGqG",
        "ZzVpMpWPHnVzzpWzDRzSZrcdDQdrQNrcQgQfjcNfjf",
        "BSZMtdtZBzMFvhCbBJDbhDDC",
        "qcqVVmccrmVcjrlHqTrjDJRPQhWvPWWfPvblffDf",
        "cHTrbGwpmGwVjdFMnzpLznMztd",
        "DGDGGbNgTgJQQLMRMMTNVzvPsPbdsfPVsdVVZfPf",
        "lcCmmlpwwnwSjCHtFpCpHzCrZsVrBZZzdvDfVrsfZd",
        "lSHwnjpFmppHqppttttcFmnhMLGNRLhTMDqJLQNLLQNLhJ",
        "WqWfDWBjBjLbfcbbqGbWqQsrFFztsppMFCzgCJzJCrFpCM",
        "VRlhdHZTZVRRmZwlmFrJwFpMMDDrrrtJwg",
        "PPVddvvDZmRmHvndTHmLcbcjSjLQBGWGGQWSqP",
        "HHvgvwHMPMwHwmcRfJNFchFGNNCm",
        "BsTDsjzBCCBJGffN",
        "jznSnSdqzqnQTbdDljQjQSMHWWvvgWvtZlrWpPfWwtPr",
        "DJCJJCNjCDRfDfDRhDnNhfjFPgbGbddBTjFdTFTPbgGSdF",
        "cmMcMVqBZVcwsGFgGqgWdFqb",
        "vcZVzwmHVcrtrwMMvvmBHwNNCDpQRfhLhrNJNfJDDDRC",
        "VWSSScsncpDRdnsWsVncVzTwMMMHtMTrLTLMMVHM",
        "fjJvQqBCQNhfQlZZnqmFHLFMTFTzwzLzrHMB",
        "CqfjjQZJPjjvpRppDPgbnSnP",
        "tLnjNwjRWttdCwRLsfGzfzPbzbWbQQPT",
        "cvvBvlBrFrlTffsbfTqZ",
        "vmrFpsrvFMMMNwhtDwhN",
        "wzgRNqwtgzMWtqGwCssBBSBZnSRsrQQS",
        "bbjLTmpjpHcpVncVdmffPCDrjZDSDsZffDQC",
        "pbVFncvvbpbbHJJHVdvqMGMJNwWlNlJMwqzlNM",
        "TdszlzFsRQqFdRzqwwQGlFsGmmSBBdmdVVmgSZdSPZBBBmSD",
        "HMCCMbJHJJLHSmSvZLBcSDBP",
        "NWbhPjfrbbNfWCPjhNnGsNzsqpQszTQGRwGQzR",
        "ppQpTNCPBTlNBVmNQTNrrrrtqsrWbGrVFWqhZb",
        "DMvDHnjRvMDLghhhgbqZWbqFSS",
        "vWvMRRJDLMnHLJjDwWnnndcllNTzBmClQBpBBzQQzCBzCJ",
        "VsNZfPMnrCnlCnWtbvBbvwtTbZwT",
        "JhJQdQhmRHDRdLmHJhljhphgGwtttmcvbwwTWtvtbGBttc",
        "jqLpjSLDHlhnffCMzsqCPP",
        "JzJdLRmmzJwrLLwLJwLTWwBrMrpHlFnScVVqccrBHSlc",
        "tvQDQhjhvbqFqFSpjHSV",
        "QbgZtsgfbNNQbgbsbQRfmWRJwJGWWTPRwqzR",
        "MwvDgpwszSpSJPsssMccTQfTDfTQRTljfRfT",
        "PmGbWhbVtZWPTqRrcTrrjTrt",
        "NbZbWHBmVGmLbZVBVNLPsMBzwSSzMJMCsCzvnvSp",
        "cTpgTnpzbZlJHTZm",
        "jRrLVtqtvtrjqsHZhvpmBfJHmhhp",
        "FqDsFLCwCVRDqwgNQcQMwnncnMpg",
        "sCCtssdZdZJmMbNJDmtmJzLSrcGfHGLTHDHnGLrHTSSn",
        "gQwRRWqwqgpggFWPjPpFnSTSnHNfLLQrccrLGHLL",
        "qqlpqhjFwPgPwvvRgFlPdslZCzMZtVdtVdVMtJlN",
        "BWVmPtRVRRWDNtZBVQzCfdscmfjcfdfzzSfz",
        "MhgJLbGggHbqpGgpgJbrFJdjwsCChCzllzCdjDSszCCD",
        "grpDLFrbgpJnqJrHGFHGqMHBBPRWQTPWZBQVTQWnPNVvBt",
        "gJfggdmHDgfJJWzCcbqvcqcmTG",
        "hLZlRBZNlBlrpprzrWqvtHvvGtbvHT",
        "sNLRjHZLNVnZZVLppnhNsMFJSjFPPQMjwgMPPfDMfS",
        "mDDzHfrPBvJRJhpBRg",
        "SsTSTwJwcbCtwssGFVWppgZRbLpLRNhpLhbLvg",
        "ttVCGjTGrfJJMfjD",
        "ffhcsTjnfqHLqvZSHvHB",
        "CsgmPVmstsQVpRbHBvFbHBDMvZLZGB",
        "ppgpmmRVpVPwPrrrTNlcrwrlWs",
        "NDtssPNBjQtCtCcT",
        "ZZqncfqhZqhJZFTJTllCGVljSl",
        "ndrWbfZwWhngwbqbZnMZcwWhDmmLDmzvHPvzNLdmzsvBBHHP",
        "FQtptwMppSFQRRQfSfvTrTJJJTrvLjMMJbgJ",
        "CcDqWBWzbldcchDGCWBCBhdGrvhnrsrjjsJvLvghrjjnnjsJ",
        "GDBldPDGqPGWVBBcwHFmSmbpSpNRwHFV",
        "CwHwCFwtCmdCDflHDpwFnnvzhhNJhJNzmhzhhNMM",
        "sTbZssPqScTrqSWSShdMvgMRRzdRRQ",
        "brBrsWPTrdrWsPcBcTcGqDLDDHjFfDClwLLBfFlFlw",
        "lNptNFWpbVMjlBgQgvdNBRQLrd",
        "TsDCDfSCQqqQQqDq",
        "TwTmwPPPzZSCccScJwpWZHljtbWMFFQVHpnj",
        "fhFmwbrgnCcSnwtS",
        "vZVVZvQZVPZsMnNSccMHPN",
        "ddzvQJvQzBzWRTJzdRVSWGqbRbgmfbFFbmbgmpmlff",
        "wdslVdQtdlBVHDrHBcBc",
        "TJWvpncCcJzCWcRfWvJRRpfZHBDZZHmDZPBjZHjZrSfb",
        "TRJFvvWpTRRWCpCgGtgtGQdlcNtsGlwg",
        "rCHvRLJtCjpbRCLpptHMVCQgGlMndVlQGNcCMc",
        "zZfzSmsfSsMzMccQMVcN",
        "ssSmPmSmhwVhZBZsTBRJrtRjtbDvjvrTHLtJ",
        "wswRCNHHhsrWFsGfGWFBGb",
        "lLtngDPLgLJPttgWzQWlbCfBlmBFCW",
        "DcDnVpcnnJPngjjcdpRhwNZSCZNdNdvr",
        "NWNzWpfMRHfwsRNznPdjtdjJtPVPHVdJ",
        "CSLTZBrGbSmClvBVdGzFVVcFdjjjnV",
        "SrZhZbTvmmbbLvwQzMhsfhqqWwQR",
        "vvZqwFBZvzZzrqltPsQstrGGpMcbbR",
        "bhJdjJJmTRQMTMMPPM",
        "mCmgLbdVVVLhVnJmLgJhBWZFDlqFvwZDlZBnBvWB",
        "sMrcmQcHHsLLrSHZhvdCddvtJJFl",
        "jzjjWplWpPRPDzPzfRGjqvdJqqqCtqdqDvdDqtwC",
        "pPNWVpGGVVffPlnSMnMsTmgsQVLr",
        "zGMMRbpGmqqqNRmmzbNfbzPRPlvThCTrHPnrHSVPlTHR",
        "LSjjwgsjtTjhPhHhvC",
        "dJZtJwFgtBLDZZbmNMGzMMqS",
        "ZrnstppPWccnsFWpnZnRdjRtjbCtSSRjjjLLbG",
        "JgBQPJvPgHHJvmmzwGGLdjHGSjShGHqdHL",
        "wTJvPzmTJvzJQBfwNmTmlPsrVfnVFpcMVZprDpFrsrVc",
        "ssGCtltsSdJJtQjPdvHvfbfvqLHqZtBfVb",
        "pzRwwDwDTgzbqVTVvHqVWB",
        "grzHnRpmFpDMnmzFhplJCjlsPdGJSjsFCdFs",
        "CTGBBGCBlSTTSsnTMrQbNrBMtpVzNddWHWzVpHVtdHmwhphm",
        "JqPZgMRFFvFZvDZMDFcFFfDchdtdPWpzpWhtHWwwhVzWpddW",
        "ZfLZMcgqRDjgjcLccDRDLsbbrSBBlQGQBCTrCBnT",
        "VjVGVqSqFLFVSqCjFJSsbfPprHbCCRRPccRWPW",
        "wwnQmtwlvNmpZRsPsWWNbZ",
        "DBhhhznhddldnvjMqJMTqDMGPSjF",
        "TTJbsJPPBDsBVbJJGJBGWLfmWzgmDmzmLqmmLddQ",
        "jHwVZZjwFZlzLzWZLMdLqM",
        "HHHhjHplrHSpcCSvjlsNPbNRbRnVTrRsNNNJ",
        "NzMMLZtwRmbwFnVDhnqD",
        "SlsJsSdSJdNJnFphVHFjph",
        "vlrsTlGPTgvvSBScGcBvfzmmLLCtMWNZRBQMzftf",
        "tRFLmZZRLrtRvtvvrvvGgvtLNfwzMzNwgdznMpwwpnMpqHdz",
        "hcsBsWTcQJhjbHMncNwzMqnzwl",
        "VWSWWTJhWBVDTJsTVWQWTVVbZtCPSvrrGSLCRFRGtRZLPmmq",
        "hbdFhdShGsFSGBlQhNhQMLLLlLJCvLLDtVJDLlwtwD",
        "WcqWsmcWrmqcmtDHJjVHrJCjjt",
        "WPWcnggssmzqzzzgfzZnWRqqdGpSNFdMSFdBMSFZhSFBZZhh",
        "GNFNtRQMGjDjwfgDZjmz",
        "bqDsPWWbsqVsdvvBJvBfmgfLLzSwzLcmzmfB",
        "WPWrrVrrVJhVWJDVsqnPdRQllRQRNhQGMlFQFMplGl",
        "mChChmSQGSGJrjPHCpPFtwgsFZjtFVZfgVwtdV",
        "MBMqvDWMlTbzlRWzllDzblZfsrgdZffgrtwrswZfdZTd",
        "DlcMvBbBMnqMDqcRqDBMWvLmCGrGLSJhnLHCCHHnPmSQ",
        "tscfGqftGfDnnppJGDGCZLbzMVMwPPhsblzbjzzMMz",
        "TWPTWWmHTmFRSBSvgBPwwwlVzhMdwblhbVjRLL",
        "TTQNNWWgHWQHPBWTNPWNcqJtGCnfqfpQZJCZpQZn",
        "CqzCGDQJCzzftfRqRzzMdvFpFpccdZFvFMtMbd",
        "rNHwmHVmswsHVsPTLnbFSTbZZpFcpvSZZgpg",
        "vPLhLLwHLhVVNVvQhBqDCBfhDzCffG",
        "WsBbBbsWNhsPsCNssRWLPLpmLDDQHlJlnlzFnDDnzF",
        "gcGfqggMqfjjGwrdDZzQFmpJQzZlFDMF",
        "qdwqvjdTrwfvvBCPtpVvtR",
        "RQdbbRHtHRvqZtwVcmwVwV",
        "WnLNnqFDlDWzzNLLrjClwCZCGZcglGCccZ",
        "LnTFfWBpffrfrhBqdsSBqhBJHb",
        "sqsgJpDMrNQgGsFMsPCfjCPChPWjqSWSjh",
        "RBnRnZVcwZllLwbwwLbZVLclhpjRttSdtjPhjWShWdphjCPd",
        "HwHwVVwVnBVBmmGppNFzrrsgJJ",
        "WpmDFlQlzmmgMMLMLQVTvTTSwNbmTVwTtHHw",
        "jrhPDnDnnZfjPTNtHSVTcjccwt",
        "CJqPfGnhGZCBfnPJCrBCqdLqMlQqDLlLRgLQFFRW",
        "vZVvDZsvhDZhZvzgVcgVqPqmwWMqcw",
        "bdTbdBBFQcdCdcGmcP",
        "bmjQpHfbpzDJRjNhJZ",
        "twRrwjFptprQjjjtQRdWCmNJTlNSCmZQcNlmlSST",
        "VVDzMWDnDHMzLZDNNJSqqCJZZD",
        "HHhhsfVHGbnwgjfrgdpgWj",
        "GmszZGMrLmnmsfGVRcVlwtwccc",
        "SSCgbNqSTgCCJMHCJtlVcwVbVljlclVfwf",
        "HTCgHSgHQThMqWQQSgDnvBdsFDvrzdZsLdmLZZ",
        "PRlMlBPPctVBlstzVLhsdwCqCdCNDjSDdWmMqdNw",
        "fZrQQHFffgGFprSJSgvZrfnqjmWdnndCNGWmWDwNNDCG",
        "rTvvpJZZrfpFSbQQvrrsssLRVPPtlRtRPThzTR",
        "FqgHFFMRTRjRFRpRRjFtNdCtJCMnNNdrdMLdrQ",
        "VhWSmwGwWVbGbvlwwlLZJLZSdJZtNCtnTSCJ",
        "BmWwWWzhvVfwWhmhwlmvwlRqHpscHRTpTDRFfTsjDPjD",
        "MJMgGqMFLPGgWVjpcmjZTpmZjZpJ",
        "hdSzzlCtzNdtWSdndttflBmjpBRmvvpjnjcvBjmvHj",
        "zdhCrfztrDSzfWzdChrhlhgPPPGDgqFFLGGFVVqqPVQw",
        "ZQZNQRZzFdCCgfLcCGDfScjDcG",
        "vsmwVHTmTfGcSHjcDS",
        "tMsmMVlSWWzdWNnQNJ",
        "GPRcQnwwQWwFFnrnnldSqzMfSCdfdldrJf",
        "LpTsjmZTsBZjpmzhLLMdSJJSMhCC",
        "ZsZBssBsDpDmmVBjCmDZHgnVNWvPQPNPGvNQncQPcRWn",
        "pznzpzlGFrvGHGrnnMvDmBMfgfTmsBsTTghDsg",
        "LJtWVCWLCNPcSbdcShWBgBThgTfjzwfhhz",
        "VZZCdLCVNNCVbCLzFnRqGqlHprQZHRqr",
        "dFTsQPdMFsMnWFPdSnwBltftttvlflNN",
        "VLZhZLqghCgzqgrLrcgVgbCvtDDtwpqNpDtlBRflDwNqDpNw",
        "cLmVhVcgbZrVhrhCLhczhQdJHTmPJJTjvTJsPFWFTW",
        "SSwNPNHldNJSngHqBssQvBfccB",
        "mMppmDprWpFGRGWmWrDrtGzQfcvvQZBBzzczqRQgRqRT",
        "WtFtFvhvpLphNJJVSCbSNP",
        "chpGMMzcwSSGnQFRQQFWcFWn",
        "sgddTfjLqsWrRtLvQnJr",
        "CsmlZgssbRdMhzCHDGpGGG",
        "vHBrTzpMPTHMtbBRRJGtDsNB",
        "QJWWVwnCZmQlWQWlLWCCmmLwRgtDdDbgngqtRdRGbDNDGtGq",
        "LwmWQLJcWmwPrpvpjjrcjT",
        "fcsWnWzhWcWgcbfbvtbHTRvpvHttmLtR",
        "lNSjwjrDFjlFhlZlQTpLHvSHptvTSRtLmJ",
        "NwjwrQDwFCZBCfWzqhqqzc",
        "fgNJNRcvvWRfWRrZFldlwlFwfFllflDH",
        "spQshQhpqhJsLpnQVLqBqlFwddHSdBFFjSFmwlFmwl",
        "hppLsqPVLnpnzJPtqtPPJTCgNcrcNbrrGNcgRNrzcZbG",
        "PWFdgDGCFPGhMtQqHBrpJqqW",
        "nlllLNmnVNNLllVbVRLRsQMqqpccQQJcJtqcJcnBrc",
        "NmvZLsNrbZNjNZVNGvdFFfwdDhPFdDzC",
        "LpZpwgLsLSzDdjVGpS",
        "bWBlHqqBhNJWNbJQFzGtCtDtGGjNGDgtGC",
        "RBRbJggbWRRmhWqTcnnfnmZMTTsTcP",
        "JJgzvfzpdzzJjJhgdfhvqfdScNsLwwGsrRbwRLbcbVrVRp",
        "WDFBTTDtHTntltnCnnntCDwGlGGbSwNVSssrbwGVsVLs",
        "nCHMDtCWWTCCHmmPDnZQgvfQgZNJJdvdMZQg",
        "lFDgvlsGvvZGDsFZWgGvWrPqnmwwtqmMVSWrSqMM",
        "hRpJhLQHhdTTVPmVSrqwtHmV",
        "ctJJJfjLpjglZDGCGljF",
        "CnnVMbhVRbQQZjBP",
        "rlfsLFLtmLSJscttFfsdjZwZNNwBPWRjRNZBZBfQ",
        "tFrmDFlDtmcltFvqVzDqQzGvCVCG",
        "JzzJzVrmzJpCCmTFmjZS",
        "HtDDtggWssqWfDgwDWvsfDBBchZjSnGGpCFjSFZjpGjFShZg",
        "sbvbvfbbDblWtrNVNRzRlJPCzM",
        "nlFnFWsWhrctWVdJPDPTnTNJPJQJ",
        "fHqvHSqRqSHjBmqvmqqHCtJSTZGdMQJDPQDPPMdNTMZN",
        "jzqmbtRRztmbLHcFpgWVsFphpcLV",
        "PHZFZFVZZfHgpwjFtmgjtq",
        "rpTrTNzzNdrTJwgMwqCBJzJz",
        "vsTWbvccRcdRbrRnRRbRrcvVpGlGHZPspSVhSPPQGGZVHV",
        "HWnDDjfPFccDPhfchnMMVWGzzpvGszCCGWWV",
        "JNBtBTQJNwJQjTpRVRMvpLsQzsRR",
        "JltNSrBjmrHfdPHnDlHg",
        "ldCJHlZFspjzHMnp",
        "zvcLQBQcQvhBwmcDppqbNpjMLnLDDn",
        "BvcmQhWWRzPJJzWWWg",
        "ggSTPZBwTPTPSTRwZPBnwPMLdVvBqzsqLzqqtVzqtzBszN",
        "QRmhQhffCQhJcDfmpChQWJmJNNtzvqtLdvNsGtLqNGzvWqvG",
        "HQFCDhDFCCQJQmZTZwTSSwrZnRFS",
        "QbFlsMbgPWPlJWzsJsJZntvnvZtctHBfZvBZlD",
        "VTqpTqmSrhVLqrpjNppgntfBgfjddHffZBdtcB",
        "VCwpqqqNVgNVgMJJwbsWWGMGFR",
        "GCwRjQlsCQrPrGMQPsRvpdvgnjgmVVmSStptgJ",
        "DzNcZNHZZhzzHhDzDTLWhDzSdJSSpnnVSTSvJJmgvSdmmn",
        "pfLNDppNWHqDWfWbzcHPRslCGbwRCPwQrGQPCF",
        "hVLnDgCmbhltrmDlhbhVmcgFBWdSBSZZBFPwBLBPfWdPWZ",
        "TNTjJNpjqGMTRRsTTCZddfWwFHFWHSSJSFPS",
        "CGQqvQRTNzTpQsDtmcrgDQllhnQl",
        "SWrtcHWjcWrPcwWrBwSPffnJNsqfMNCNqNfJFfSq",
        "QLQvhBpbbvdvTdvpTdGDbDQqqqslsNMJlMMCqMfQnlfC",
        "gThhpmDLbzBmGLptrmRZcwHWHZjVrW",
        "gQvzQRvSSbvvJvQgfRrfbSpGqBPGwqwVjPBBwwjpRmjB",
        "TcNHHVVtNsDHcMcdMBjqpBnGnwlGTwlPBl",
        "MHsMDHFMdDtZddZdFdFrhhgbFFVvffrzzffrrS",
        "QSFmrDSSQrqlfmDDHPRTdrrTPRbsTPTsNN",
        "wBcclhhgwgMhWLLtVMgVvzRTNNjvbszzTdjNdsRbjp",
        "nJgVMtBhwLBctmQHQlnCGqmQZZ",
        "sggtjzzggfGmPbCMvRCMvTmT",
        "RDqqhdQdDlcDpqVlLbSbZFSTTPllbCMv",
        "hqpQWRhhdncDQcBsrwzjnfgtgGfgHs",
        "MTrzlgMNQNggrrrPlzQDPCsFRfscTfFVhVftRsFFsScS",
        "nWWHZHhZWJjjwjLjwbLbwHGSFppVfFVcGcFLfFSVttpf",
        "jWhZZBhqBbwvZvBjZNNQrQQQzPMlzzglPB",
        "jLVhJZQjwFCLRjQhPRZFLDzrGDHpDGsGqztGHststC",
        "SBNlNmWnfvdLmlnvfNSbzrDTTzprdqrDpGqqpHrG",
        "bNmSBnBmcfMmcmnlfcnNSnLhZPVVJhwjZRJPwjZMPjMZ",
        "VpzBDgGTGVNNpSGzppMdTQwcvFdFMQdcdFwc",
        "ZDsqfRftWtllmlWbLLtjFFMwMrjCcwfvMFvwcC",
        "PHbDLHZtZJSJPpVgnV",
        "bRvTdswLLSTvwswSbDhsDTvFmmGRVmJGZJnRcGGfFVJcqn",
        "MWllQMllWHrjWPNplrllQMPZJmnnVmqJcNmVFFnJNFqVGC",
        "PgpQrQjjzQWHzpBdvtwhwdSShBZTsT",
        "MhTwjMTsTRFStjmSMqqppBrHpDrzHtPqbD",
        "dllNcZWgldLvcsvvvvgvWddlHffqBHBBfPzbbqBpPHrpHNbq",
        "VddvgWWdCZhnhsCSSCGT",
        "LPjqHnDNqqHNllqLpqPCZCGRCssGdGrGFrPrgr",
        "WVBztWTQSQMBQrGgRwwwCGgtwg",
        "QJMTgvbTTWSzWWvSbVJTzJllJlHHhLpNqpHqjNjNHpjq",
        "PCHCbPPPHPlTThBhjGTTNhMNTh",
        "FrmfLqdqgfmfttqtWqfrqdhshchDBshDllDBcGDhGDWs",
        "mqgdpvFmmdLdqqQCPHZZblvwZQZl",
        "bQGqmngwwgSNrBWJWdHZmjfZWB",
        "FlpRLCptFLMlLPRLlCCcCCMpjJZJHShWdWvBHHdcZdBWZvSv",
        "FRPCDTTtFptVTnQnrGbwbS",
        "LsdmnDMTLbzsbNtqcb",
        "lJjCnHSvQRRwQQjRRHQbgWbqctNJPbcWrcPPgc",
        "RhGSQGwBvvGShnGlHClwjmfpmfdmVmfFDBLDDZpmMf",
        "ppDnPmwvNDjTjjcssT",
        "qqfRHzdCPHWfhHHtTjjbbLLGZr",
        "MhzqWdJCzqJWSJnpnpvvPSPP",
        "NGWdQgDDHGJgQLznzzsJFFzvzB",
        "twRCpZVjVWqVSqVwwjtZfrrfntfvznBssBncfLrc",
        "jRRwCqwCZhlhZRpSZpjSqWwqmDMQdMmHPQQMHGdlHdTldNGd"
    ];

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const uppercaseAlphabet = alpha.map((x) => String.fromCharCode(x));
const lowercaseAlphabet = uppercaseAlphabet.map(l => l.toLowerCase());
const upperAndLower = [...lowercaseAlphabet, ...uppercaseAlphabet];

function stringHalves(string) {
    const index = string.length / 2;
    const firstHalf = string.slice(0, index);
    const secondHalf = string.slice(index);
    return [firstHalf, secondHalf];
}

function halfLengths(halves) {
    return halves.map(half => half.length)
}

function getStringValues(a, b, c) {
    const matchingLetterArray = a.split('').filter(l => b.includes(l) && c.includes(l));
    console.log(matchingLetterArray)
    const letter = matchingLetterArray[0];
    const quantity = matchingLetterArray.length
    const singleValue = upperAndLower.indexOf(matchingLetterArray[0]) + 1;
    const totalValue = singleValue * quantity;
    return {
        letter,
        quantity,
        singleValue,
        totalValue
    }
}

// const halves = inputs
//     .map(string => stringHalves(string))
//     .map(([a, b]) => getStringValues(a, b))
//     .reduce((sum, obj) => {
//         return sum + obj.singleValue
//     }, 0)


// console.log(halves)

// Part One
// One matching character between each array, case sensitive
// a-z = 1 - 26,
// A-Z = 27 - 52
// find sum of the priorities

// Part 2
// get 3 arrays at a time.
// find the one common letter
// get value of common letter
// sum of each letter

function groupThirds(array) {
    let arrayOfThirds = [];
    let currentBatch = [];

    array.forEach(sack => {
        currentBatch.push(sack);
        if (currentBatch.length === 3) {
            arrayOfThirds.push(currentBatch);
            currentBatch = [];
        }
    })
    return arrayOfThirds;
}

const thirds = groupThirds(inputs);
const processedThirds = thirds.map(([a, b, c]) => getStringValues(a, b, c))
    .reduce((sum, obj) => {
        return sum + obj.singleValue
    }, 0)

console.log(processedThirds)