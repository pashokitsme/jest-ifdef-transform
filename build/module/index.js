import { parse } from 'ifdef-loader/preprocessor';
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
            const code = parse(sourceText, data, verbose, tripleSlash, sourcePath, fillWithBlanks, uncommentPrefix);
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
export default IfdefTransformer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBU2xELE1BQU0sZ0JBQWdCLEdBQWlDO0lBQ3JELE9BQU8sQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU87UUFDckMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDO1FBRXRDLE1BQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQztRQUNwQyxNQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUvQyxNQUFNLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQztRQUM3QyxNQUFNLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV2RCxNQUFNLGtCQUFrQixHQUFHLHdCQUF3QixDQUFDO1FBQ3BELE1BQU0sY0FBYyxHQUFHLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFN0QsTUFBTSxtQkFBbUIsR0FBRyx3QkFBd0IsQ0FBQztRQUNyRCxNQUFNLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRS9ELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3SyxJQUFJO1lBQ0YsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBRXhHLE9BQU87Z0JBQ0wsSUFBSTthQUNMLENBQUE7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osTUFBTSxZQUFZLEdBQUcsK0JBQStCLEdBQUcsRUFBRSxDQUFDO1lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFMUIsT0FBTztnQkFDTCxJQUFJLEVBQUUsVUFBVTthQUNqQixDQUFDO1NBQ0g7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQUVELGVBQWUsZ0JBQWdCLENBQUMifQ==