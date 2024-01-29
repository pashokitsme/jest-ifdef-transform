"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preprocessor_1 = require("ifdef-loader/preprocessor");
const IfdefTransformer = {
    process(sourceText, sourcePath, options) {
        const { transformerConfig } = options;
        const verboseFlag = "ifdef-verbose";
        const verbose = transformerConfig[verboseFlag];
        const tripleSlashFlag = "ifdef-triple-slash";
        const tripleSlash = transformerConfig[tripleSlashFlag];
        const fillWithBlanksFlag = "ifdef-fill-with-blanks";
        const fillWithBlanks = transformerConfig[fillWithBlanksFlag];
        const uncommentPrefixFlag = "ifdef-uncomment-prefix";
        const uncommentPrefix = transformerConfig[uncommentPrefixFlag];
        const data = Object.fromEntries(Object.entries(transformerConfig).filter(([key]) => ![verboseFlag, tripleSlashFlag, fillWithBlanksFlag, uncommentPrefixFlag].includes(key)));
        try {
            const code = (0, preprocessor_1.parse)(sourceText, data, verbose, tripleSlash, sourcePath, fillWithBlanks, uncommentPrefix);
            return {
                code,
            };
        }
        catch (err) {
            const errorMessage = `jest-ifdef-transform error: ${err}`;
            console.log(errorMessage);
            return {
                code: sourceText
            };
        }
    },
};
exports.default = IfdefTransformer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw0REFBa0Q7QUFTbEQsTUFBTSxnQkFBZ0IsR0FBaUM7SUFDckQsT0FBTyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsT0FBTztRQUNyQyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFFdEMsTUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDO1FBQ3BDLE1BQU0sT0FBTyxHQUFHLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRS9DLE1BQU0sZUFBZSxHQUFHLG9CQUFvQixDQUFDO1FBQzdDLE1BQU0sV0FBVyxHQUFHLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXZELE1BQU0sa0JBQWtCLEdBQUcsd0JBQXdCLENBQUM7UUFDcEQsTUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUU3RCxNQUFNLG1CQUFtQixHQUFHLHdCQUF3QixDQUFDO1FBQ3JELE1BQU0sZUFBZSxHQUFHLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFL0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdLLElBQUk7WUFDRixNQUFNLElBQUksR0FBRyxJQUFBLG9CQUFLLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFFeEcsT0FBTztnQkFDTCxJQUFJO2FBQ0wsQ0FBQTtTQUNGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixNQUFNLFlBQVksR0FBRywrQkFBK0IsR0FBRyxFQUFFLENBQUM7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUUxQixPQUFPO2dCQUNMLElBQUksRUFBRSxVQUFVO2FBQ2pCLENBQUM7U0FDSDtJQUNILENBQUM7Q0FDRixDQUFBO0FBRUQsa0JBQWUsZ0JBQWdCLENBQUMifQ==